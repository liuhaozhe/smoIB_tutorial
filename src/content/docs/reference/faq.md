---
title: Frequently asked questions
description: Troubleshoot problems with the environment, input data, experiment runs, and reproduced results.
---

## Can I reproduce the paper’s results with this tutorial?

The tutorial outlines the workflow. The full set of materials needed to reproduce the reported results is still pending, including the final paper, experiment code, dataset links, environment files, and verified commands. The overview gives the [citation format](../../#citation).

## Why does the package import fail after installation?

Check that the interpreter in your terminal and the kernel in your notebook use the environment where you installed the dependencies. Then check the package name, its version, and the full error message. If two methods have conflicting dependencies, follow their installation instructions in separate environments.

## Do I need a GPU?

Hardware requirements depend on the implementation and dataset size. Check each example for CPU support, the hardware used for testing, and the expected runtime. A single hardware specification for the full benchmark is still pending.

## Why does the run fail after the data load successfully?

Check that the loaded data match the method’s input requirements. Verify the matrix orientation, data types, observation IDs, pairing across modalities, spatial coordinates, and preprocessing steps. [Data preparation](../../guides/data-preparation/)

## What if I run out of system or GPU memory?

Check the dataset size against the method’s memory requirements. If the method supports smaller examples or batch processing, use those options to diagnose the problem. Record any changes to the experimental conditions and report subset results as a partial reproduction.

## Why can results differ even with a fixed random seed?

The implementation, dependency versions, hardware, and parallel execution can all affect the result, even with the same seed. Record the full environment, repeat the runs specified by the protocol, and check whether the differences fall within the range given for the reference results.

## If my figure looks similar, have I reproduced the result?

Use the figure as supporting evidence. Also compare the inputs, configuration, output dimensions, and evaluation metrics. The single-dataset tutorial shows how to [evaluate spatial domains](../../tutorials/single-dataset/#step-4-identify-and-evaluate-spatial-domains).

## What should I keep when troubleshooting a run?

Record the code version, environment, input data version, run configuration, random seed, and device. Keep the full log, note which step failed, and reproduce the issue with the smallest input you can.
