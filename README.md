# Vision-based System for Early Detection of Diabetic Retinopathy

A capstone project that grades the severity of diabetic retinopathy from retinal fundus photographs. 
A CNN classifier is trained jointly with an autoencoder,
using the autoencoder's reconstruction loss as a regularizer to reduce overfitting
on a small, heavily imbalanced medical imaging dataset.

## Stack

PyTorch · EyePACS retinal fundus dataset (31,631 training images) · trained
on Google Colab (Tesla K80), evaluated locally on a GTX 1050

## About this repository

This repository holds project documentation only.
The implementation was built as coursework and isn't published publicly;
the write-up site covers the architecture, the three-phase training procedure, and the results in detail.

## License