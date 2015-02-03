# Static site kindling

Simple boilerplate setup for [Metalsmith](http://www.metalsmith.io)-generated static sites based on [Handlebars](http://handlebarsjs.com/) and [Stylus](http://learnboost.github.io/stylus/). Some bits taken from [HTML5 boilerplate](https://html5boilerplate.com/).


## Usage

(Prerequisite: Node.js)

Download zip (or clone), then (from the repo root):

- either manually install with `npm install` then build with `node build.js`
- or run `make`

To watch and auto-rebuild on `src` changes: `make watch` (i.e. `node build.js watch`). Typically used with a live-reload server such as [Puer](https://github.com/leeluolee/puer).

To cleanup `build`: `make clean` (leaves untouched the folder itself and possible system files within)


## Licence

MIT
