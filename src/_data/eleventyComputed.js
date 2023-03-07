module.exports = {
  permalink: function permalink(data) {
    if (data.published === false) return false;
    return data.permalink;
  },

  eleventyExcludeFromCollections: function (data) {
    if (data.published === false) return true;
    if (data.hidden === true) return true;
    return data.eleventyExcludeFromCollections;
  },
};
