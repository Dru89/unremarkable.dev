// Articles I found show the average reading time for someone
// is anywhere between 180 and 250 words per minute.
//
// I'm going to err on the side of the lower one here, because
// code snippets can be harder to read. Plus reading something
// faster than the estimate feels like you're winning.
const WORDS_PER_MINUTE = 185;

module.exports = {
  /**
   * @param {string} content
   */
  readtime: function readtime(content) {
    const words = content.match(/\b(\w+)\b/g).length;
    const time = Math.floor(words / WORDS_PER_MINUTE);
    return format(time);
  },
};

/**
 * @param {number} value
 */
function format(value) {
  if (value < 1) {
    return "less than one minute";
  }

  const label = NUMBERS_AS_STRINGS[value] ?? String(value);
  const unit = value === 1 ? "minute" : "minutes";
  return `${label} ${unit}`;
}

const NUMBERS_AS_STRINGS = [
  undefined,
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
