#!/bin/bash
# Rename all .mp4 files in current directory:
# - Replace spaces with dashes (-)
# - Convert all letters to lowercase

shopt -s nullglob
for file in *.mp4; do
  newname=$(echo "$file" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
  if [[ "$file" != "$newname" ]]; then
    echo "Renaming: '$file' → '$newname'"
    mv -i -- "$file" "$newname"
  fi
done
