const path = require("node:path");
const sass = require("sass");
const postcss = require("postcss");
const cssnano = require("cssnano");

module.exports = class StyleSheet {
  data() {
    return {
      permalink: "/css/style.css",
      file: path.join(__dirname, "..", "scss", "style.scss"),
    };
  }

  async render({ file }) {
    return postcss
      .default([cssnano])
      .process(sass.compile(file, { sourceMap: true }).css, { from: file })
      .then((result) => result.css);
  }
};
