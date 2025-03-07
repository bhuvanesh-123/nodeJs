exports.mathFunction = function (a, b, type, callback) {
  if (typeof a !== "number" || typeof b !== "number") {
    return callback(new Error("The inputs must be numbers"));
  }

  switch (type) {
    case "add":
      return callback(null, a + b); // ✅ Fixed addition

    case "subtract":
      return callback(null, a - b);

    case "multiply":
      return callback(null, a * b);

    case "divide":
      if (b === 0) {
        return callback(new Error("B cannot be zero")); // ✅ Fixed division error check
      }
      return callback(null, a / b);

    default:
      return callback(new Error("Invalid operation type")); // ✅ Handle unknown operations
  }
};
