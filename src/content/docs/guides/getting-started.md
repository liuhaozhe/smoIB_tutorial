---
title: Quick start
description: Run one integration method on one dataset and check the outputs at each step.
---

Start by running one method on one dataset, from input files to results. Once that run succeeds, you can extend it to a batch of benchmark experiments.

:::note[Example status]
This page outlines a minimal run. A complete example with verified commands, sample data, a run configuration, and expected outputs will follow once the experiment code has been checked.
:::

## Before you start

Set up the environment, prepare the data, and confirm the method and dataset versions. Use the example configuration for your first run so you can check the workflow from start to finish. [Environment setup](../installation/) · [Data preparation](../data-preparation/)

## Run SpatialGlue on one dataset

To run SpatialGlue on the `DBIT_MM_BRN_00_A1` dataset, start in the project root. First, run the RNA and ADT preprocessing script with the dataset ID.

```bash
python Scripts/Preprocessing/spatialglue/preprocess_rna_adt.py \
  --dataset DBIT_MM_BRN_00_A1
```

Once preprocessing finishes, run the dataset-specific integration script from the same directory.

```bash
python Scripts/Integration/spatialglue/run_DBIT_MM_BRN_00_A1.py
```

## Check the output

After the program exits successfully, open the output files and check that their observations match the inputs. Confirm that the numerical checks pass and that the expected downstream steps finish.

Once reference results are available, compare the dimensions of the outputs, the metric values, and the figures. For methods that use randomness, repeat the experiment to establish how much the results vary. Use that range alongside the figures when assessing reproducibility.

## Next steps

Follow the worked example in [Tutorial 1 · Single-dataset analysis](../../tutorials/single-dataset/). When you are ready to compare methods across datasets, continue to [Tutorial 2 · Reproducing the benchmark](../../tutorials/benchmark-reproduction/).
