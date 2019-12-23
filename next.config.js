const withImages = require('next-images');

const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['gsap']
});

module.exports = withImages();
