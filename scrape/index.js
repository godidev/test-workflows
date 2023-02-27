require("dotenv").config();
const params = process.argv.slice(2);

if (params === "WWW.GOOGLE.ES") {
  console.log("FUNCTIONA");
} else {
  console.log("FAIL");
}
