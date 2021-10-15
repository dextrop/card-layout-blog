#!/bin/bash

ng build
rm -rf docs
cp -r dist/cardlayoutnoimage docs
rm -rf dist