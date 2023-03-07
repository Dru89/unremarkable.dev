const { marked } = require("marked");
const sanitize = require("sanitize-html");

module.exports = {
  markdown: function markdown(content) {
    return sanitize(marked.parse(content), {
      allowedTags: sanitize.defaults.allowedTags.concat(["img"]),
    });
  },
};
