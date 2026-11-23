---
title: Tutorial 2 · Reproducing the benchmark
description: Find the preprocessing and integration commands for each benchmark dataset and method.
---

Run each experiment from the `BSMO3` project root. Find your dataset ID below, then open the method you want to run.

## Run one dataset

1. **Preprocess the data.** Run the preprocessing command with the Python interpreter from your preprocessing environment. Keep `--protocol` and any `--params` argument as shown so the inputs match what the integration script expects.
2. **Run integration.** From the same directory, run the dataset-specific integration command. It selects the method’s Python environment. If the matching preprocessed inputs already exist, start with this step. Run methods that use CUDA on a GPU node.

MEFISTO and MEFISTO-acc share preprocessed inputs. The CPU and GPU versions of MultiGATE also share inputs. You can reuse the same preprocessing output when switching between either pair.

SMOPCA-acc currently provides validation scripts only. Both `validate.py` and `validate_remaining.py` are in `Scripts/Integration/smopca-acc/`.

## Commands by dataset

### RNA + ADT

<details id="csmx-hs-mam-bc-a1">
<summary><code>CSMX_HS_MAM_BC_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol lymph_counts --params Scripts/Preprocessing/three_d_ot/configs/cosmx_full_resources.json
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol spatial_rna_clr_adapter --params Scripts/Preprocessing/mefisto/configs/CSMX_HS_MAM_BC_A1.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol spatial_rna_clr_adapter --params Scripts/Preprocessing/mefisto/configs/CSMX_HS_MAM_BC_A1.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol spatial_rna_clr_adapter --params Scripts/Preprocessing/mofa/configs/CSMX_HS_MAM_BC_A1.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_CSMX_HS_MAM_BC_A1.py
```

</details>

The MultiGATE GPU entry point is disabled for this CosMx dataset.

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol paired_intensity_adapter --params Scripts/Preprocessing/praga/configs/cosmx_memory_efficient.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol paired_adt_adapter --params Scripts/Preprocessing/separ/configs/cosmx_exact_resources.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol wnn_log_clr_intensity_adapter --params Scripts/Preprocessing/seurat/configs/cosmx_full.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol cosmx_intensity_seq_adapter --params Scripts/Preprocessing/spatialfuser/configs/cosmx_seq.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_CSMX_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset CSMX_HS_MAM_BC_A1 --seed 42 --protocol paired_intensity_adapter --params Scripts/Preprocessing/spatialglue/configs/cosmx_memory_efficient.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_CSMX_HS_MAM_BC_A1.py
```

</details>

</details>

<details id="dbit-mm-brn-00-a1">
<summary><code>DBIT_MM_BRN_00_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol lymph_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_DBIT_MM_BRN_00_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol rna_protein_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_DBIT_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset DBIT_MM_BRN_00_A1 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_DBIT_MM_BRN_00_A1.py
```

</details>

</details>

<details id="simu-sy-nul-00-a2">
<summary><code>SIMU_SY_NUL_00_A2</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol simulation_tutorial
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol simulation_no_feature_prior
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol simulation_no_feature_prior
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_SIMU_SY_NUL_00_A2.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol simulation_tutorial
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol paired_adt_seq_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_SIMU_SY_NUL_00_A2.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A2 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_SIMU_SY_NUL_00_A2.py
```

</details>

</details>

<details id="spot-mm-mam-bc-a1">
<summary><code>SPOT_MM_MAM_BC_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol lymph_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_SPOT_MM_MAM_BC_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol spots_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol rna_protein_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_SPOT_MM_MAM_BC_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset SPOT_MM_MAM_BC_A1 --seed 42 --protocol spots_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_SPOT_MM_MAM_BC_A1.py
```

</details>

</details>

<details id="spot-mm-spl-00-a1">
<summary><code>SPOT_MM_SPL_00_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol lymph_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_SPOT_MM_SPL_00_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol spots_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol rna_protein_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_SPOT_MM_SPL_00_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A1 --seed 42 --protocol spots_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_SPOT_MM_SPL_00_A1.py
```

</details>

</details>

<details id="spot-mm-spl-00-a2">
<summary><code>SPOT_MM_SPL_00_A2</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol lymph_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_SPOT_MM_SPL_00_A2.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol spots_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol rna_protein_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_SPOT_MM_SPL_00_A2.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset SPOT_MM_SPL_00_A2 --seed 42 --protocol spots_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_SPOT_MM_SPL_00_A2.py
```

</details>

</details>

<details id="vcyt-hs-brn-gb-a1">
<summary><code>VCYT_HS_BRN_GB_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol lymph_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_VCYT_HS_BRN_GB_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol 10x_counts --params Scripts/Preprocessing/praga/configs/vcyt_hs_brn_gb_a1_memory.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol rna_protein_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_VCYT_HS_BRN_GB_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset VCYT_HS_BRN_GB_A1 --seed 42 --protocol 10x_counts --params Scripts/Preprocessing/spatialglue/configs/vcyt_hs_brn_gb_a1_memory.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_VCYT_HS_BRN_GB_A1.py
```

</details>

</details>

<details id="vcyt-hs-lnd-00-a1">
<summary><code>VCYT_HS_LND_00_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol lymph_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_VCYT_HS_LND_00_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol rna_protein_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_VCYT_HS_LND_00_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset VCYT_HS_LND_00_A1 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_VCYT_HS_LND_00_A1.py
```

</details>

</details>

<details id="vcyt-hs-mam-bc-a1">
<summary><code>VCYT_HS_MAM_BC_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol lymph_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_VCYT_HS_MAM_BC_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol rna_protein_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_VCYT_HS_MAM_BC_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset VCYT_HS_MAM_BC_A1 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_VCYT_HS_MAM_BC_A1.py
```

</details>

</details>

<details id="vcyt-hs-ton-00-a1">
<summary><code>VCYT_HS_TON_00_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol lymph_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_VCYT_HS_TON_00_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol rna_protein_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_VCYT_HS_TON_00_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A1 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_VCYT_HS_TON_00_A1.py
```

</details>

</details>

<details id="vcyt-hs-ton-00-a2">
<summary><code>VCYT_HS_TON_00_A2</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol lymph_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol dbit_log
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol spatial_rna_clr_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol raw_gene_protein_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_VCYT_HS_TON_00_A2.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol paired_adt_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol wnn_log_clr
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol rna_protein_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_VCYT_HS_TON_00_A2.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset VCYT_HS_TON_00_A2 --seed 42 --protocol 10x_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_VCYT_HS_TON_00_A2.py
```

</details>

</details>

### RNA + ATAC

<details id="sara-mm-brn-00-a1">
<summary><code>SARA_MM_BRN_00_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol mouse_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol p22_sct_signac_recomputed
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol spatial_rna_tfidf_adapter --params Scripts/Preprocessing/mefisto/configs/SARA_MM_BRN_00_A1.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol spatial_rna_tfidf_adapter --params Scripts/Preprocessing/mefisto/configs/SARA_MM_BRN_00_A1.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol spatial_rna_tfidf_adapter --params Scripts/Preprocessing/mofa/configs/SARA_MM_BRN_00_A1.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol p22_author_counts
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol p22_author_counts
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_SARA_MM_BRN_00_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol mouse_counts --params Scripts/Preprocessing/praga/configs/mouse_praga_memory.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol misar_counts --params Scripts/Preprocessing/separ/configs/p22_full_resources.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol signac_sct_spatial
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol p22_peak_gene_activity
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol dc_local
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol e13_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_SARA_MM_BRN_00_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_atac.py --dataset SARA_MM_BRN_00_A1 --seed 42 --protocol mouse_counts --params Scripts/Preprocessing/spatialglue/configs/mouse_spatialglue_memory.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_SARA_MM_BRN_00_A1.py
```

</details>

</details>

### RNA + RNA

<details id="simu-mm-olb-00-a1">
<summary><code>SIMU_MM_OLB_00_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol rna_expression_adapter
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol simulation_paired
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol spatial_rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol spatial_rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol spatial_rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol simulation_identity_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol simulation_identity_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_SIMU_MM_OLB_00_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol rna_expression_adapter --params Scripts/Preprocessing/separ/configs/mob_full_resources.json
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol wnn_processed_rna_pair_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol rna_expression_adapter
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol simulation_paired_expression
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol simulation_paired_expression
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_SIMU_MM_OLB_00_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_rna.py --dataset SIMU_MM_OLB_00_A1 --seed 42 --protocol rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_SIMU_MM_OLB_00_A1.py
```

</details>

</details>

<details id="simu-mm-vcx-00-a1">
<summary><code>SIMU_MM_VCX_00_A1</code></summary>

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol rna_expression_adapter
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol simulation_paired
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol spatial_rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol spatial_rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol spatial_rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol simulation_identity_adapter
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol simulation_identity_adapter
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_SIMU_MM_VCX_00_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol wnn_processed_rna_pair_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol rna_expression_adapter
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol simulation_paired_expression
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol simulation_paired_expression
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_SIMU_MM_VCX_00_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_rna.py --dataset SIMU_MM_VCX_00_A1 --seed 42 --protocol rna_expression_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_SIMU_MM_VCX_00_A1.py
```

</details>

</details>

### RNA + ADT and RNA + ATAC

<details id="simu-sy-nul-00-a1">
<summary><code>SIMU_SY_NUL_00_A1</code></summary>

This dataset has two inputs, RNA + ADT and RNA + ATAC. Prepare both before running the integration script once. For SMOPCA, prepare only the RNA + ADT input.

<details>
<summary>3d-OT</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/three_d_ot/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol simulation_tutorial
python Scripts/Preprocessing/three_d_ot/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol mouse_counts
```

```bash title="Integration" wrap
../envs/3d-ot/bin/python Scripts/Integration/three_d_ot/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>CellPie</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cellpie/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol all_genes
python Scripts/Preprocessing/cellpie/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol all_genes
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cellpie/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>COSMOS</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/cosmos/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol dbit_log
python Scripts/Preprocessing/cosmos/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol raw_lsi_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/cosmos/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>MEFISTO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
python Scripts/Preprocessing/mefisto/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol spatial_rna_tfidf_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>MEFISTO-acc</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mefisto/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
python Scripts/Preprocessing/mefisto/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol spatial_rna_tfidf_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mefisto-acc/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>MISO</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/miso/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol molecular
python Scripts/Preprocessing/miso/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol molecular
```

```bash title="Integration" wrap
../envs/miso/bin/python Scripts/Integration/miso/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>MOFA+</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/mofa/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol spatial_rna_clr_adapter
python Scripts/Preprocessing/mofa/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol spatial_rna_tfidf_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/mofa/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>MultiGATE (CPU)</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol simulation_no_feature_prior
python Scripts/Preprocessing/multigate/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol simulation_no_feature_prior
```

```bash title="Integration" wrap
../envs/multigate-cpu/bin/python Scripts/Integration/multigate/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>MultiGATE GPU</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/multigate/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol simulation_no_feature_prior
python Scripts/Preprocessing/multigate/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol simulation_no_feature_prior
```

```bash title="Integration" wrap
(source Deployment/multigate-gpu/activate.sh && python Scripts/Integration/multigate_gpu/run_SIMU_SY_NUL_00_A1.py)
```

</details>

<details>
<summary>PRAGA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/praga/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol 10x_counts
python Scripts/Preprocessing/praga/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol mouse_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/praga/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>SEPAR</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/separ/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol paired_adt_adapter
python Scripts/Preprocessing/separ/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol misar_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/separ/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>Seurat WNN</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/seurat/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol wnn_log_clr
python Scripts/Preprocessing/seurat/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol wnn_simulated_atac_adapter
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/seurat/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>SMOPCA</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/smopca/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol simulation_gene_selection
```

```bash title="Integration" wrap
../envs/smopca/bin/python Scripts/Integration/smopca/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>SpaMV</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spamv/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol simulation_tutorial
python Scripts/Preprocessing/spamv/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol simulation_atac_lsi_adapter
```

```bash title="Integration" wrap
../envs/spamv/bin/python Scripts/Integration/spamv/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>SpatialFuser</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialfuser/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol paired_adt_seq_adapter
python Scripts/Preprocessing/spatialfuser/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol e13_seq
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialfuser/run_SIMU_SY_NUL_00_A1.py
```

</details>

<details>
<summary>SpatialGlue</summary>

```bash title="Preprocessing" wrap
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol 10x_counts
python Scripts/Preprocessing/spatialglue/preprocess_rna_atac.py --dataset SIMU_SY_NUL_00_A1 --seed 42 --protocol mouse_counts
```

```bash title="Integration" wrap
../envs/benchmark-pyg/bin/python Scripts/Integration/spatialglue/run_SIMU_SY_NUL_00_A1.py
```

</details>

</details>
