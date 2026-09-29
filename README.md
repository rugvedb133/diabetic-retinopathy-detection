# Vision-based System for Early Detection of Diabetic Retinopathy

[![Live site](https://img.shields.io/badge/Website-Github_Pages-D57027?logo=githubpages)](https://rugvedb133.github.io/diabetic-retinopathy-detection/)
[![IEEE ICCCA 2020](https://img.shields.io/badge/IEEE-ICCCA%202020-00629B?logo=ieee&logoColor=white)](https://doi.org/10.1109/ICCCA49541.2020.9250772)

![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white)
![CUDA](https://img.shields.io/badge/CUDA-76B900?logo=nvidia&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white)
![Matplotlib](https://custom-icon-badges.demolab.com/badge/Matplotlib-11557C?logo=matplotlib&logoColor=fff)
![Google Colab](https://img.shields.io/badge/Google%20Colab-F9AB00?logo=googlecolab&logoColor=white)

A capstone project that grades the severity of diabetic retinopathy from retinal fundus photographs. 
A CNN classifier is trained jointly with an autoencoder,
using the autoencoder's reconstruction loss as a regularizer to reduce overfitting
on a small, heavily imbalanced medical imaging dataset.

**Read the full write-up**: [rugvedb133.github.io/diabetic-retinopathy-detection](https://rugvedb133.github.io/diabetic-retinopathy-detection/)

## Stack

PyTorch · EyePACS retinal fundus dataset (31,631 training images) · trained
on Google Colab (Tesla K80), evaluated locally on a GTX 1050

## Published research

This work was later published as:

> "Reducing Overfitting in Diabetic Retinopathy Detection using Transfer Learning",
> *2020 IEEE 5th International Conference on Computing Communication and Automation (ICCCA)*, 2020, pp. 298–301.
> doi: [10.1109/ICCCA49541.2020.9250772](https://doi.org/10.1109/ICCCA49541.2020.9250772)

## About this repository

- [`main`](../tree/main): contains documentation only.
  The project's source code is part of coursework and is not published.
- [`gh-pages`](../tree/gh-pages):
  contains source of the write-up website (plain HTML/CSS/JS, no build step).

## License

**Dataset images.**
The five sample fundus photos used on the website come from the
[Diabetic Retinopathy Detection](https://www.kaggle.com/competitions/diabetic-retinopathy-detection)
competition dataset on Kaggle
(Emma Dugas, Jared, Jorge, Will Cukierski; 2015),
with data provided by EyePACS and sponsored by the California Healthcare Foundation.  
They are shown here, resized and compressed, as a small sample for non-commercial academic/educational purposes only.
They remain the property of their respective owners,
are subject to the [competition rules](https://www.kaggle.com/competitions/diabetic-retinopathy-detection/rules),
and are **not** covered by any license of this repository.
This project does not redistribute the dataset.

**Everything else.** Original website content (prose, diagrams, design) is all rights reserved unless stated otherwise.