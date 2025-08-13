#!/bin/bash

# Deployment script for GitHub Pages
# This script builds the project and prepares the dist folder

echo "🚀 Building project for GitHub Pages deployment..."

# Build the project
npm run build

# Copy HTML files to dist
echo "📄 Copying HTML files..."
cp index.html dist/
cp about.html dist/
cp theme-demo.html dist/

# Copy case studies
echo "📁 Copying case studies..."
cp -r case-studies dist/

# Update paths in dist files for GitHub Pages
echo "🔧 Updating paths for GitHub Pages..."

# Update index.html paths
sed -i '' 's|dist/css/|css/|g' dist/index.html
sed -i '' 's|dist/img/|img/|g' dist/index.html
sed -i '' 's|dist/js/|js/|g' dist/index.html

# Update about.html paths
sed -i '' 's|dist/css/|css/|g' dist/about.html
sed -i '' 's|dist/img/|img/|g' dist/about.html
sed -i '' 's|https://risherry.ro/dist/|./|g' dist/about.html

# Update case study paths
sed -i '' 's|../dist/css/|../css/|g' dist/case-studies/*.html
sed -i '' 's|../dist/img/|../img/|g' dist/case-studies/*.html

echo "✅ Build complete! The dist folder is ready for GitHub Pages deployment."
echo ""
echo "To deploy:"
echo "1. Commit and push the dist folder to your repository"
echo "2. Set GitHub Pages source to the dist folder"
echo "3. Or push dist contents to gh-pages branch"
echo ""
echo "Your site will be available at: https://[username].github.io/[repository-name]/"
