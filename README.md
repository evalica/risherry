# [risherry](http://risherry.ro/)

[![Build Status](https://travis-ci.org/evalica/risherry.svg?branch=master)](https://travis-ci.org/evalica/risherry)
[![devDependency Status](https://david-dm.org/evalica/risherry/dev-status.svg)](https://david-dm.org/evalica/risherry#info=devDependencies)

Risherry is designed as a customizable personal website.

It's build using [Bootstrap](http://getbootstrap.com/), [Handlebars](http://handlebarsjs.com/) and [JQuery](https://jquery.com/) frameworks. Additionally it uses [Sass](http://sass-lang.com/), [Font Awesome](http://fortawesome.github.io/Font-Awesome/) and [Google Fonts](http://www.google.com/fonts).

## Quick Start

If you want to customize locally the sources you will need [Node.js](https://nodejs.org/) and [Grunt](http://gruntjs.com/).

It's using Grunt plugins like [watch](https://www.npmjs.com/package/grunt-contrib-watch), [sass](https://www.npmjs.com/package/grunt-contrib-sass), [concat](https://www.npmjs.com/package/grunt-contrib-concat), [cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin), [uglify](https://www.npmjs.com/package/grunt-contrib-uglify). The plugins are installed and managed via [npm](https://npmjs.org/), the Node.js package manager.

#### `npm install`

After everything is set up, you can run the `swatch` task that builds all the available themes at once. Themes can be build also one at a time by using `grunt swatch:[theme]`, for example `grunt swatch:rain`.

#### `grunt swatch`

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

Version `0.2.0` provides the `Bliss`, `Bordo`, `Rain` and `Moss` themes:

<img src="https://cloud.githubusercontent.com/assets/629552/7220685/c166ada6-e6d9-11e4-9d9c-4263f94ad817.png" width="235px" height="593px" />  <img src="https://cloud.githubusercontent.com/assets/629552/7220688/cb2b26c8-e6d9-11e4-8381-b3667e0ecbf5.png" width="235px" height="593px" />  <img src="https://cloud.githubusercontent.com/assets/629552/7220686/c728afa0-e6d9-11e4-8e96-1016534586fc.png" width="235px" height="593px" />

## Testing

Test your changes using a [local web server](https://stackoverflow.com/a/21608670/444320). Depending on your configuration there might be changes between the `master` and the `ghpages` branches.
