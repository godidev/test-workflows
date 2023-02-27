require("dotenv").config();
const params = process.argv.slice(2);

console.log("url1: ", params && params[0]);
console.log("url2: ", process.env.URL);
