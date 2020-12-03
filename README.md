# Fitting Game
[**Fitting Game**](https://untlsn.github.io/fitting-game/) is a simple, asynchronous, and lightweight web game without canvas.

The game is to match cards by pictures to thyself
# Usage technology
Programing language [*TypeScript*](https://github.com/microsoft/TypeScript) v. 4.0.3,

HTML preprocesor [*Pug*](https://github.com/pugjs) v. 3.0.0,

CSS preprocesor [*SASS/**SCSS***](https://github.com/sass/sass) v. 1.27.0,

Building with [*Parcel*](https://github.com/parcel-bundler/parcel) v. 1.12.4.

## Require

Because parcel with async function require [**regenerator-runtime**](https://www.npmjs.com/package/regenerator-runtime), they must be included

# Getting Started
Game is ready to use in [**dist**](https://github.com/Untlsn/fitting-game) folder or by [**github pages**](https://untlsn.github.io/fitting-game/).

Only require web browser with JavaScript support


#### Game can be build and serve by parcel using:
* For build
``` 
npm run build 
```
* For serve
``` 
npm run serve 
```
# Rules
Game is simple and easy.

First click on one of carts. The cart will turn over and show you its mark.

Next click on another cart, it will turn over too and if cart mark is similar they say in reverse, else they turn over again.

Game end when all carts is reversed.
