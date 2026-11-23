---
title: Data preparation
description: Check data sources, modalities, sample identifiers, and input formats before running a spatial multi-omics integration method.
---

Before running an integration method, check that the input files are complete, that observations match across modalities where required, and that the data support the comparison you want to make.

:::note[Dataset availability]
Refer to the original article for the list of benchmark datasets, download links, licenses, and checksums. The guidelines below apply across datasets and file formats.
:::

## 1. Download and document the data

For each dataset, record its source, version or download date, sample information, and license. If the provider publishes checksums, verify the downloaded files against them. Keep the original files intact and save preprocessed data separately.

## 2. Check the inputs

| Input | What to check |
| --- | --- |
| Measurement matrix for each modality | Identify the observation and feature axes. Check the feature identifiers, what the values represent, and whether they have been normalized. |
| Observation identifiers | Check that each cell or spatial spot has a unique ID within its modality. Determine whether observations are paired across modalities. |
| Spatial coordinates | Check the coordinate dimensions and units, the tissue section each observation belongs to, and how the coordinates map to observation IDs. |
| Sample and batch metadata | Check the sample origins, the fields that identify batches, and any missing entries. |
| Reference labels (if available) | Check where the labels come from, which observations they cover, and how the protocol allows you to use them. |

For paired data, verify that the modalities contain the same observation IDs in the same order. For unpaired data, confirm that the method supports unpaired inputs. Joining matrices by row position can incorrectly pair unrelated cells or spots.

## 3. Document preprocessing

Record the filtering rules and the settings used for normalization, feature selection, and dimensionality reduction. If a method has specific input requirements, document any preprocessing steps that differ from those used for other methods.

If the experiment uses a train/test split, follow the protocol for assigning observations to each set. Fit preprocessing parameters only on the data permitted for training to keep test information out of the training process.

## 4. Check the data before the run

- Confirm that all required files have been downloaded and that compressed files have been extracted successfully.
- Compare the matrix dimensions, observation counts, and feature counts with the dataset documentation.
- Check for missing values and duplicate IDs, and verify how observations match across modalities.
- Confirm that the spatial coordinates and the expression matrix refer to the same observations.
- Save the preprocessing configuration and record the dataset version.

Continue to [Quick start](../getting-started/).
