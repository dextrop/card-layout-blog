#!/bin/bash

ng build
rm -rf docs
mv dist docs