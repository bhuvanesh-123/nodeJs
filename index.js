const textTransform = require("./lib/textTransform");

textTransform.textTransform("HeLlO", "lc", (error, data) => {
  console.log("The transformed string is ", `${data}`);
});

textTransform.textTransform("hello", "uc", (error, data) => {
  console.log("The transformed string is ", `${data}`);
});
