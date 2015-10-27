[![Build Status](https://travis-ci.org/evalica/risherry.svg?branch=master)](https://travis-ci.org/evalica/risherry)

# [risherry](http://risherry.ro/)

Risherry is designed as a customizable personal website.

It's build using [Bootstrap](http://getbootstrap.com/), [Handlebars](http://handlebarsjs.com/) and [JQuery](https://jquery.com/) frameworks. Additionally it uses [LESS](http://lesscss.org/), [Font Awesome](http://fortawesome.github.io/Font-Awesome/) and [Google Fonts](http://www.google.com/fonts).

## Quick Start

If you want to customize locally the sources you will need [Node.js](https://nodejs.org/) and [Grunt](http://gruntjs.com/).

It's using Grunt plugins like [watch](https://www.npmjs.com/package/grunt-contrib-watch), [less](https://www.npmjs.com/package/grunt-contrib-less), [concat](https://www.npmjs.com/package/grunt-contrib-concat), [cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin), [uglify](https://www.npmjs.com/package/grunt-contrib-uglify). The plugins are installed and managed via [npm](https://npmjs.org/), the Node.js package manager (using `npm install`).

#### `grunt`
After everything is set up, run `grunt` to launch the `watch` task that will compile and minify the CSS and JavaScript sources.

## Customizing

### Content

The content it's easily customizable since it reads the data from JSON.

```
risherry/
├── src/
    ├── data/
    │   ├── config.json
    │   ├── content.json
    │   └── themes.json
    ├── js/
    └── less/

```

### Themes

By default, there are three available themes: `Bliss`, `Rain` and `Moss`. 

<img src="https://cloud.githubusercontent.com/assets/629552/7220685/c166ada6-e6d9-11e4-9d9c-4263f94ad817.png" width="235px" height="593px" />  <img src="https://cloud.githubusercontent.com/assets/629552/7220688/cb2b26c8-e6d9-11e4-8381-b3667e0ecbf5.png" width="235px" height="593px" />  <img src="https://cloud.githubusercontent.com/assets/629552/7220686/c728afa0-e6d9-11e4-8e96-1016534586fc.png" width="235px" height="593px" />

Each of these themes have a `custom.less` and a `variables.less` file, that contain the theme's definition. New themes can be created and used.

```
risherry/
├── src/
    ├── data/
    ├── js/
    └── less/
        ├── skin/
        ├── style.less
        └── themes/
            ├── bliss/
            ├── moss/
            └── rain/
                ├── custom.less
                └── variables.less
```


## License

Copyright 2015 Ecaterina Moraru (Valica), under the [MIT](LICENSE) license.
