---
title: Methods and comparisons
description: Compare how 14 spatial omics and multi-omics methods use molecular measurements, tissue coordinates, and images to identify spatial domains.
---

The benchmark compares 14 methods for identifying spatial domains, or regions of tissue with similar molecular profiles. When interpreting a domain map, first ask how the method defines a neighbor. Two spots can have similar RNA profiles even when they lie far apart in the tissue. The methods below differ in how they use molecular similarity, physical proximity, and measurements taken at the same spot.

## Classical machine learning

### Seurat

*R · 2015.* Seurat builds a k-nearest neighbor (KNN) graph from molecular profiles and can use the overlap between neighborhoods to construct a shared nearest neighbor (SNN) graph for clustering. Its spatial workflow can also map those clusters back onto tissue coordinates. [Seurat documentation](https://satijalab.org/seurat/)

### MOFA+

*R · 2020.* MOFA+ uses Bayesian factor analysis to learn patterns of variation across modalities. The model has no explicit spatial prior, so its factors provide a baseline for asking how much tissue structure the molecular measurements alone can recover. [MOFA+ paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC7212577/)

### MEFISTO

*R · 2022.* MEFISTO extends Bayesian factor analysis with a Gaussian process kernel over spatial coordinates or time. Each factor can have a different degree of smoothness, allowing the model to capture gradual tissue gradients alongside variation with little spatial structure. [MEFISTO paper](https://www.nature.com/articles/s41592-021-01343-9)

### SMOPCA

*Python · 2025.* SMOPCA uses probabilistic principal component analysis to estimate components shared across modalities. A covariance kernel based on tissue coordinates encourages nearby spots to have similar component scores. These scores can then be clustered to identify domains. [SMOPCA paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC12096709/)

### SEPAR

*Python · 2025.* SEPAR uses non-negative matrix factorization with a spatial graph to identify metagenes, or groups of genes with a shared expression pattern. Each metagene has an activity map that shows where the pattern occurs and a set of gene weights that helps explain it. [SEPAR paper](https://www.nature.com/articles/s42003-025-09340-w)

### CellPie

*Python · 2025.* CellPie uses joint non-negative matrix factorization on features measured at matching tissue spots. In the published workflow, each spot contributes RNA counts and features from its corresponding histology image patch. The resulting factors show where gene expression and tissue morphology vary together. [CellPie paper](https://academic.oup.com/nar/article/53/6/gkaf251/8102295)

## Deep learning with graph neural networks

### SpatialGlue

*Python · 2024.* SpatialGlue builds two graphs for each modality. One connects spots that are physically close and the other connects spots with similar molecular profiles. Attention first combines the two graphs within each modality, then learns how much each modality contributes to the joint embedding at each spot. [SpatialGlue paper](https://www.nature.com/articles/s41592-024-02316-4)

### COSMOS

*Python · 2025.* COSMOS uses a graph neural network to encode each modality on a graph of neighboring tissue locations. It learns a modality weight for each spot, so different measurements can contribute more strongly in different regions of the same section. [COSMOS paper](https://www.nature.com/articles/s41467-024-55204-y)

### PRAGA

*Python · 2024.* PRAGA combines spatial neighbors with a feature graph whose connections can change during training. It also learns prototypes that represent groups of similar spots. Together, these steps use signals across modalities to refine which spots cluster together. [PRAGA paper](https://arxiv.org/abs/2409.12728)

### MultiGATE

*Python · 2025.* MultiGATE uses graph attention at two levels. The first captures relationships between features across modalities, such as an accessible chromatin region and a nearby gene. The second uses a graph of neighboring tissue spots to learn a spatial embedding for each modality. [MultiGATE paper](https://www.nature.com/articles/s41467-025-63418-x)

### SpatialFuser

*Python · 2025.* SpatialFuser starts with a spatial KNN graph and uses adaptive attention to draw on information beyond each spot’s immediate neighbors. It can also align and integrate modalities measured on different tissue sections, where spots have no one-to-one correspondence. [SpatialFuser preprint](https://doi.org/10.1101/2025.09.14.676067) · [SpatialFuser documentation](https://liwz-lab.github.io/SpatialFuser/)

## Other deep embedding methods

### SpaMV

*Python · 2026.* SpaMV learns a shared embedding across modalities and a separate embedding for the signals specific to each modality. Its encoders use spatial neighbors, so both kinds of signal can be mapped back onto the tissue. Comparing those maps can reveal a domain visible in only one modality. [SpaMV paper](https://www.nature.com/articles/s41467-026-74718-1) · [2025 preprint](https://www.biorxiv.org/content/10.1101/2025.08.02.668264v1)

### spaLLM

*Python · 2025.* spaLLM uses scGPT, a pretrained single-cell language model, to encode gene expression. It combines this representation with molecular features and spatial neighbors through graph neural networks and attention. The resulting spot embeddings are used to identify spatial domains. [spaLLM paper](https://academic.oup.com/bib/article/26/4/bbaf304/8184496)

### MISO

*Python · 2025.* MISO uses a multilayer perceptron autoencoder for each modality and combines the learned features and their pairwise interactions for clustering. When a matched histology image is available, image features capture spatial context at multiple scales, from local morphology to the surrounding tissue. [MISO paper](https://www.nature.com/articles/s41592-024-02574-2)

## Comparing domain maps

For the first comparison, use the same tissue section and the same spots. Cluster the MOFA+ and MEFISTO factors with the same settings, map both results onto the tissue, and inspect a boundary or gradient of interest. This gives you a concrete way to examine how adding coordinates to a factor model changes the recovered domains.

For a broader comparison, record which modalities and spatial inputs each method used, which output you clustered, and the clustering settings and random seeds. Where reference annotations are available, check agreement with those labels alongside spatial coherence. The single-dataset tutorial walks through this process with SpatialGlue, and the benchmark tutorial extends it across methods and runs. [Single-dataset analysis](../../tutorials/single-dataset/) · [Reproducing the benchmark](../../tutorials/benchmark-reproduction/)
