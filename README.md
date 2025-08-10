# [risherry](http://risherry.ro/)

[![Version](https://img.shields.io/github/release/evalica/risherry.svg)](https://github.com/evalica/risherry/releases) [![Release Data](https://img.shields.io/github/release-date/evalica/risherry.svg)](https://github.com/evalica/risherry/releases)

 <!--- [![Build Status](https://img.shields.io/travis/evalica/risherry.svg)](https://travis-ci.org/evalica/risherry)
[![devDependency Status](https://img.shields.io/david/evalica/risherry.svg)](https://david-dm.org/evalica/risherry) --->

Risherry began as a customizable personal website and portfolio build using [Bootstrap](http://getbootstrap.com/), [Handlebars](http://handlebarsjs.com/) and [JQuery](https://jquery.com/) frameworks. It also incorporates [Sass](http://sass-lang.com/), [Font Awesome](http://fortawesome.github.io/Font-Awesome/) and [Google Fonts](http://www.google.com/fonts).

## Quick Start

If you want to customize locally the sources you will need [Node.js](https://nodejs.org/) and [npm](https://npmjs.org/).

The build system uses [Grunt](http://gruntjs.com/) with plugins like [watch](https://www.npmjs.com/package/grunt-contrib-watch), [sass](https://www.npmjs.com/package/grunt-sass), and [cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin). The plugins are installed and managed via npm.

#### `npm install`

Install all dependencies.

#### `npm run build`

Build all themes by compiling SCSS to CSS and minifying the output.

#### `npm run sass`

Compile SCSS files to CSS only.

#### `npm run cssmin`

Minify CSS files only.

#### `npm run watch`

Launch the watch task that monitors file changes and automatically compiles and minifies the CSS sources.

You should run the build tasks on the `src/sass` files and commit the results in the `dist` folder.

## Customizing

### Content

The content it's easily customizable since it reads the data from JSON.

```
risherry/
├── src/
    ├── data/
    │   ├── config.json
    │   ├── content.json
    ├── js/
    └── sass/

```

### Themes

By default, there are default available themes. 

Each of these themes have a `custom.scss` and a `variables.scss` file, that contain the theme's definition. New themes can be created and used.

```
risherry/
├── src/
    ├── data/
    ├── js/
    └── sass/
        ├── skin/
        ├── style.scss
        └── themes/
            └── default/
                ├── custom.scss
                └── variables.scss
```

## Testing

Test your changes using a [local web server](https://stackoverflow.com/a/21608670/444320). Depending on your configuration there might be changes between the `master` and the `ghpages` branches.
