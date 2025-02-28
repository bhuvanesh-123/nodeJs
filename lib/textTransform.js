module.textTransform = (inputText, key, callback) => {
  if (!inputText) {
    return callback(
      new Error("The input cannot be empty, enter some string"),
      null
    );
  } else if (typeof inputText !== "string") {
    return callback(new Error("The input must be alphabetic string"), null);
  } else if (key != "lc" && key != "uc") {
    return callback(
      new Error("The key must be either lc(for lowercase) or uc for uppercase"),
      null
    );
  } else {
    return callback(
      null,
      key === "lc" ? inputText.toLowerCase() : inputText.toUpperCase()
    );
  }
};
