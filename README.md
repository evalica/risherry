# [risherry](http://risherry.ro/)

[![Version](https://img.shields.io/github/release/evalica/risherry.svg)](https://github.com/evalica/risherry/releases) [![Release Data](https://img.shields.io/github/release-date/evalica/risherry.svg)](https://github.com/evalica/risherry/releases)

 <!--- [![Build Status](https://img.shields.io/travis/evalica/risherry.svg)](https://travis-ci.org/evalica/risherry)
[![devDependency Status](https://img.shields.io/david/evalica/risherry.svg)](https://david-dm.org/evalica/risherry) --->

Risherry began as a customizable personal website and portfolio build using [Bootstrap](http://getbootstrap.com/), [Handlebars](http://handlebarsjs.com/) and [JQuery](https://jquery.com/) frameworks. It also incorporates [Sass](http://sass-lang.com/), [Font Awesome](http://fortawesome.github.io/Font-Awesome/) and [Google Fonts](http://www.google.com/fonts).

## Quick Start

If you want to customize locally the sources you will need [Node.js](https://nodejs.org/) and [Grunt](http://gruntjs.com/).

It's using Grunt plugins like [watch](https://www.npmjs.com/package/grunt-contrib-watch), [sass](https://www.npmjs.com/package/grunt-contrib-sass), [concat](https://www.npmjs.com/package/grunt-contrib-concat), [cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin), [uglify](https://www.npmjs.com/package/grunt-contrib-uglify). The plugins are installed and managed via [npm](https://npmjs.org/), the Node.js package manager.

#### `npm install`

After everything is set up, you can run the `swatch` task that builds all the available themes at once. Themes can be build also one at a time by using `grunt swatch:[theme]`, for example `grunt swatch:rain`.

#### `grunt swatch`
#### `npx grunt swatch:default`

You should run the tasks on the `src/sass` files and commit the results in the `dist` folder.

#### `grunt watch`

Launching the `watch` task that will start a process that listens to file changes and compiles and minifies the CSS and JavaScript sources.

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
