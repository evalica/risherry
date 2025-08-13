# GitHub Pages Deployment

This folder contains the static files ready for GitHub Pages deployment.

## Structure

```
dist/
├── index.html              # Main homepage
├── about.html              # About page
├── theme-demo.html         # Theme demonstration page
├── case-studies/           # Case study pages
│   ├── xwiki.html
│   ├── anylyze.html
│   └── analog-devices-protected.html
├── css/                    # Compiled CSS
│   └── themes/
│       ├── dark/
│       └── light/
├── js/                     # Bundled JavaScript
│   └── app.js
└── img/                    # Images and assets
    ├── favicon.ico
    ├── avatar-portrait.png
    └── logo.png
```

## Deployment

1. Set the GitHub Pages source to the `dist` folder
2. Or push the contents of this folder to the `gh-pages` branch
3. The site will be available at `https://[username].github.io/[repository-name]/`

## Content Management

The site uses dynamic content rendering:
- Content is stored in `src/js/content.js`
- JavaScript bundle is in `dist/js/app.js`
- To update content, edit `src/js/content.js` and run `npm run build`

## Features

- ✅ Responsive design
- ✅ Dark theme (default)
- ✅ Dynamic content rendering
- ✅ Case studies with detailed pages
- ✅ YouTube video integration
- ✅ Social media links
- ✅ Smooth scrolling and animations
