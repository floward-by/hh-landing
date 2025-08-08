#!/bin/bash
# Fix for deployment build output issue
# Moves frontend files from dist/public/ to dist/ where deployment expects them

echo "Running build..."
npm run build

echo "Moving frontend files to correct location..."
if [ -d "dist/public" ]; then
    cp -r dist/public/* dist/
    rm -rf dist/public
    echo "✅ Frontend files moved from dist/public/ to dist/"
else
    echo "No dist/public directory found - build may have already been fixed"
fi

echo "Build fix complete!"