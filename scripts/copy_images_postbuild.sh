#!/bin/bash
# Post-build: copy docs/**/img/ directories to build output
# Docusaurus excludes img from docs plugin processing; this copies them after.

set -e

SRC="docs"
DEST="build/docs"

echo "Copying images from docs/ to build/docs/..."

# Only copy img directories that exist under the included sections
for section in dev/atomic-dev dev/ndk-dev dev/game-dev atomic; do
  find "$SRC/$section" -type d -name "img" 2>/dev/null | while read imgdir; do
    rel="${imgdir#$SRC/}"
    destdir="$DEST/$rel"
    if [ -d "$destdir" ]; then
      echo "  updating: $rel ($(find "$imgdir" -type f | wc -l) files)"
      cp -R "$imgdir"/* "$destdir/" 2>/dev/null || true
    else
      echo "  creating: $rel ($(find "$imgdir" -type f | wc -l) files)"
      mkdir -p "$destdir"
      cp -R "$imgdir"/* "$destdir/" 2>/dev/null || true
    fi
  done
done

echo "Done."
