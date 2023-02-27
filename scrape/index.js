const params = process.argv.slice(2);

require("dotenv").config();

console.log("rul1", params && params[0]);
console.log("url2", process.env.URL);
