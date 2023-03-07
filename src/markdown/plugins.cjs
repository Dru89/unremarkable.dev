const abbr = require("markdown-it-abbr");
const anchor = require("markdown-it-anchor");
const attrs = require("markdown-it-attrs");
const deflist = require("markdown-it-deflist");
const footnote = require("markdown-it-footnote");
const figure = require("markdown-it-image-figures");
const mark = require("markdown-it-mark");

const slugify = require("@sindresorhus/slugify");

module.exports = {
  /**
   * @param {import('markdown-it')} md
   */
  applyPlugins: function applyPlugins(md) {
    md.use(abbr)
      .use(anchor, {
        slugify: (s) => slugify(s),
        permalink: anchor.permalink.linkInsideHeader({
          placement: "before",
          symbol: `<i class="fa-solid fa-link" aria-hidden="true">&nbsp;</i>`,
        }),
      })
      .use(attrs)
      .use(deflist)
      .use(figure, { lazy: true, async: true, figcaption: true })
      .use(footnote)
      .use(mark);

    return md;
  },
};
