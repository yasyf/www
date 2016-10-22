#!/bin/bash
set -e
set -o pipefail

stylus static -c -u nib --import nib styles/app.styl
mv css/app.css static/css/app.css
