const fs = require("fs");

const request = require("request");

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if(error) {
    if (error.errno === "ENOTFOUND") {
      console.log("Invalid URL, please try again.")
    } else {
      console.log("error", error);
    }
  };
  
  if (!error) {
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    });
  }
});
