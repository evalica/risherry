# GitHub Pages Setup Guide

## ✅ Static Files Generated

The `dist/` folder now contains all the static files needed for GitHub Pages deployment:

### 📁 File Structure
```
dist/
├── index.html                    # Main homepage (dynamic content)
├── about.html                    # About page
├── theme-demo.html              # Theme demonstration
├── case-studies/                # Case study pages
│   ├── xwiki.html
│   ├── anylyze.html
│   └── analog-devices-protected.html
├── css/themes/
│   ├── dark/style.min.css       # Main stylesheet
│   └── light/style.min.css      # Light theme (optional)
├── js/
│   └── app.js                   # Bundled JavaScript with content
└── img/
    ├── favicon.ico
    ├── avatar-portrait.png
    └── logo.png
```

### 🔧 Path Updates
All file paths have been updated to work correctly when served from GitHub Pages:
- CSS: `css/themes/dark/style.min.css`
- JavaScript: `js/app.js`
- Images: `img/filename.png`
- Case studies: `../css/` (relative paths from subdirectory)

## 🚀 Deployment Options

### Option 1: Use dist folder as source
1. Go to your repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch: `master` (or `main`)
4. Set folder to `/ (root)`
5. Save

### Option 2: Use gh-pages branch
1. Create a new branch called `gh-pages`
2. Copy contents of `dist/` to the root of that branch
3. Push the branch
4. Set GitHub Pages source to `gh-pages` branch

### Option 3: Use GitHub Actions (recommended)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ master ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - name: Install dependencies
      run: npm install
    - name: Build project
      run: npm run build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📝 Content Management

The site uses dynamic content rendering:
- **Edit content**: Modify `src/js/content.js`
- **Rebuild**: Run `npm run build` or `./deploy.sh`
- **Deploy**: Push changes to trigger GitHub Pages update

## 🎯 Features Ready

- ✅ Responsive design
- ✅ Dark theme (default)
- ✅ Dynamic content from JavaScript
- ✅ Case studies with detailed pages
- ✅ YouTube video integration
- ✅ Social media links
- ✅ Smooth scrolling and animations
- ✅ SEO-friendly meta tags

## 🔄 Update Process

1. Edit content in `src/js/content.js`
2. Run `./deploy.sh` to rebuild
3. Commit and push changes
4. GitHub Pages will automatically update

Your site will be available at: `https://[username].github.io/[repository-name]/`
