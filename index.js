const { textTransform } = require("./lib/textTransform");
const { mathFunction } = require("./lib/mathFunction");

textTransform("HeLlO", "lc", (error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("The transformed string is:", data);
  }
});

textTransform("hello", "uc", (error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("The transformed string is:", data);
  }
});

mathFunction(10, 10, "add", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(`The add result is: ${data}`);
  }
});
mathFunction(10, 10, "subtract", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(`The subtract result is: ${data}`);
  }
});
mathFunction(10, 10, "divide", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(`The division result result is: ${data}`);
  }
});
mathFunction(10, 10, "multiply", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(`The multiply result is: ${data}`);
  }
});
