
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-art-direction-js": preferDefault(require("/Users/thor3/Documents/using-gatsby-image/src/pages/art-direction.js")),
  "component---src-pages-blur-up-js": preferDefault(require("/Users/thor3/Documents/using-gatsby-image/src/pages/blur-up.js")),
  "component---src-pages-dominant-color-js": preferDefault(require("/Users/thor3/Documents/using-gatsby-image/src/pages/dominant-color.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/thor3/Documents/using-gatsby-image/src/pages/index.js")),
  "component---src-pages-prefer-webp-js": preferDefault(require("/Users/thor3/Documents/using-gatsby-image/src/pages/prefer-webp.js")),
  "component---src-pages-static-images-js": preferDefault(require("/Users/thor3/Documents/using-gatsby-image/src/pages/static-images.js")),
  "component---src-pages-traced-svg-js": preferDefault(require("/Users/thor3/Documents/using-gatsby-image/src/pages/traced-svg.js"))
}

