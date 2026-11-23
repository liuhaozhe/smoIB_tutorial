---
title: Environment setup
description: Check the code version, software dependencies, and computing resources before running a spatial multi-omics integration method.
---

Start by setting up the software environment for your experiments. Document the setup so you can recreate it later.

:::note[instructions]
The Python, R, CUDA, or method package versions in the experimental code and dependency list may differ slightly from those in the original method due to updates or experimental requirements, but they have been verified to be compatible with the algorithm. This tutorial does not provide detailed environment versions. A reference yml deployment file is provided at the following URL: <https://github.com/liuhaozhe/smoIB/Deployment>. If it is incompatible with your system environment, please try removing some package version restrictions.
:::

## 1. Record the code version

1. Open a terminal in your local clone of the project. Run `git remote get-url origin` and copy the repository URL into your experiment record.
2. If the example specifies a version, replace `VERSION` in `git switch --detach VERSION` with the release tag or commit hash and run the command.
3. Use the command below to record the current commit hash. To repeat the experiment later, return to that commit and use the same configuration.

<div class="code-version-note" lang="en">

:::note[Record the code version]
Run `git rev-parse HEAD` in the project's Git repository. Save the commit hash with your experiment configuration.
:::

</div>

## 2. Check the requirements

| Requirement | What to check |
| --- | --- |
| Operating system | The operating system and version used for testing |
| Language runtime | The Python or R version each method requires |
| Dependencies | An environment file or dependency list with pinned versions |
| CPU and GPU support | Whether the method runs on a CPU and which GPU, driver, and CUDA versions are compatible |
| Computing resources | Dataset size, system memory, GPU memory, disk space, and expected runtime |

Check the requirements for each method individually. Different methods may need different environments.

## 3. Create the experiment environment

Install the dependencies using the environment file from the code repository. If two methods have conflicting dependencies, create a separate environment for each and record which method version it supports.

Once the environment files are confirmed, this guide will include the commands for creating each environment, installing the method package, and selecting the corresponding kernel in a notebook.

## 4. Verify the installation

Before downloading the full dataset, run these checks.

- Check that your interpreter or Python kernel belongs to the intended environment.
- Import the method package and its required dependencies.
- If you plan to use a GPU, check that the method detects the device you intend to use.
- Run the method’s minimal example or a tutorial example to completion.

Save the exported environment file and the verification log. If a check fails, consult the [frequently asked questions](../../reference/faq/).

Continue to [Data preparation](../data-preparation/).
