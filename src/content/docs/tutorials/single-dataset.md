---
title: Tutorial 1 · Single-dataset analysis
description: Use SpatialGlue to integrate spatial RNA and protein data from human lymph node sample A1 and evaluate spatial domains against manual tissue annotations.
---

## Integrate spatial RNA and protein data with SpatialGlue

This tutorial uses human lymph node sample A1 (`VCYT_HS_LND_00_A1`). You will preprocess the data once and use the same inputs to train SpatialGlue with 20 random seeds. Compare the resulting domain maps to see how consistently the runs identify follicles, the cortex, and the medullary sinuses. Run all commands from the **BSMO3 project root**. All project paths below are relative to that directory.

### Step 1. Check the sample, modalities, and reference annotations

The raw data and annotations for A1 are in `Data/VCYT_HS_LND_00_A1/`. The sample contains 3,484 capture spots. The file `adata_RNA.h5ad` holds counts for 18,085 genes, and `adata_ADT.h5ad` holds counts for 31 antibody-derived tags (ADTs). The project identifies this pairing as `rna_adt` and uses the `10x_counts` preprocessing protocol for this sample.

Align the RNA and ADT matrices by spot barcode, then compare their spatial coordinates. Corresponding rows should describe the same position on the tissue section. The `manual-anno` column in `annotation.csv` contains 10 manually annotated tissue classes. You will use them to evaluate the clusters in step 4.

### Step 2. Prepare the features and neighbor graphs

For RNA, keep genes detected in at least 10 spots and select 3,000 highly variable genes from the raw counts. Normalize each spot to a total count of 10,000, apply the `log1p` transformation, scale the values, and run principal component analysis (PCA) on the highly variable genes. For ADT, apply centered log-ratio (CLR) normalization within each spot, then scale the values and run PCA. Each modality yields a **3,484 × 30** feature matrix.

Build two graphs per modality. The spatial graph connects each spot to its 3 nearest neighbors in tissue coordinates. The feature graph connects it to the 20 nearest spots by correlation distance in PCA space. The two feature matrices and four normalized graphs are stored in `Preprocessed/results/SpatialGlue/VCYT_HS_LND_00_A1/rna_adt/10x_counts/seed_42/`. All 20 training runs reuse these inputs.

If you already have these preprocessed files, continue to step 3. To generate them from the raw data in a fresh checkout, run the following command.

```bash
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py \
  --dataset VCYT_HS_LND_00_A1 --protocol 10x_counts --seed 42
```

### Step 3. Run SpatialGlue on sample A1

For each spot, SpatialGlue first learns how to weight the spatial and feature graphs within each modality. It then learns how to weight RNA and ADT when combining them. The A1 script uses the `10x` configuration and trains each model for 200 epochs at a learning rate of `0.0001`. The result is a 64-dimensional joint embedding for each spot.

```bash
python -u Scripts/Integration/spatialglue/run_VCYT_HS_LND_00_A1.py
```

The script trains one model for each seed from **42 to 61**, in sequence, and writes a separate output directory for each seed. In `integrated.h5ad`, `obsm["X_integrated"]` contains the joint embedding and `obsm["spatial"]` contains the corresponding coordinates. The file `run_stats.json` in the same directory records elapsed time, the device used, and peak GPU memory usage.

To inspect the RNA and ADT weights for individual spots, use the single-run script `Scripts/Integration/spatialglue/run.py`. Its output also includes `obsm["alpha"]`. See `Scripts/Integration/spatialglue/README.md` for usage and output details.

### Step 4. Identify and evaluate spatial domains

The project includes 20 integration results for A1. Start with the result for training seed 42. Use `cluster_mclust` to cluster the **3,484 × 64** joint embedding. Set the number of clusters to 10 to match the number of manually annotated tissue classes. Then use `evaluate` to match the reference labels by RNA spot coordinates, and plot the predicted domains and manual annotations side by side on the tissue.

```python
from pathlib import Path

import scanpy as sc
from Scripts.Clustering.mclust import cluster_mclust
from Scripts.Evaluation.rna_adt import evaluate

dataset = "VCYT_HS_LND_00_A1"
result = (
    Path("Outputs/Integration/SpatialGlue") / dataset
    / "rna_adt/10x_counts/seed_42/integrated.h5ad"
)

adata = cluster_mclust(result, n_clusters=10, embedding_key="X_integrated", seed=42)
scores = evaluate(dataset, adata.obs["mclust"], adata.obsm["spatial"])
print(f"ARI = {scores['ARI']:.4f}, NMI = {scores['NMI']:.4f}")

sc.pl.embedding(adata, basis="spatial", color=["mclust", "manual-anno"])
```

This example reads `Outputs/Integration/SpatialGlue/VCYT_HS_LND_00_A1/rna_adt/10x_counts/seed_42/integrated.h5ad` and evaluates all 3,484 spots. To read the maps, find the follicles in the manual annotations, then look at which predicted clusters cover those spots. To assess stability across the 20 runs, change the training-seed directory in the input path and keep the seed and parameters for `cluster_mclust` fixed.

### Run all datasets with `run_all.py`

From the BSMO3 project root, activate the project environment and run the batch script. These commands assume that `deployment/` and `BSMO3/` share a parent directory.

```bash
source ../deployment/benchmark-pyg/activate.sh
python -u Scripts/Integration/spatialglue/run_all.py
```

`run_all.py` calls **15 dataset scripts** in sequence. One dataset, `SIMU_SY_NUL_00_A1`, contains both RNA + ADT and RNA + ATAC inputs. This gives **16 dataset–modality combinations × 20 training seeds = 320 integration runs**. The batch script reuses the preprocessed inputs for each combination and logs the runs in `summary.csv`. After training, follow step 4 to cluster and evaluate the results you want to examine.

The example’s `summary.csv` records **320 successful runs out of 320**. Running the batch script again repeats every task and appends the new run records to `summary.csv`. Successful runs overwrite the results in their seed directories.

Continue to [Tutorial 2 · Reproducing the benchmark](../benchmark-reproduction/).
