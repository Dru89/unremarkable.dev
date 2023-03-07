const humanDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

module.exports = {
  dateHuman: function dateHuman(date) {
    if (date == null) {
      throw new Error("Date was not provided.");
    }
    return humanDate.format(new Date(date));
  },
  dateStamp: function dateStamp(date) {
    if (date == null) {
      throw new Error("Date was not provided.");
    }
    return new Date(date).toISOString();
  },
};
