## Portfolio website v2. React/Webpack/Jekyll for github pages
### http://ivandaho.github.io

Source files are in the sourcefiles folder. Run `npm install` in the sourcefiles folder to get dependencies

Entry point for webpack is sourcefiles/src/App.js

**Webpack** output is set to sourcefiles/app.js. sourcefiles/app.js is included in this repo.


At this point, css is added in sourcefiles/index.html

From sourcefiles directory, run `node_modules/.bin/webpack-dev-server --inline` for a webpack dev server

Run `node_modules/.bin/webpack` in sourcefiles directory to compile to sourcefiles/app.js

Once sourcefiles/app.js exists, it will be possible to just do a simple node `http-server`

**Jekyll** can be run in the root directory. The GiHhub Pages is serving static Jekyll generated files,  however I'm not really utilizing Jekyll features at at the moment.

Static files are in [this](https://github.com/ivandaho/ivandaho.github.io) GitHub Pages repo.

**Bootstrap** less can be tweaked, first do `npm install` in sourcefiles/bootstrap and then `grunt dist` will build the css

This repo uses bootstrap-react, which is a standalone library (no external JavaScript dependencies), however bootstrap css is still required. 
