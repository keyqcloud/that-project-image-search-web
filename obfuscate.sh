#!/bin/bash

suffix="-source"

for filename in assets/js/*-source.js; do
    javascript-obfuscator "$filename" --output ${filename//$suffix/} --compact true --string-array-encoding 'base64' --string-array-wrappers-type variable
done
