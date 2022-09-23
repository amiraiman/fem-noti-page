const sass = require("sass");
const fs = require("fs");

const result = sass.compile("./src/main.scss");
const { css } = result;

try {
    fs.writeFileSync("./docs/styles.css", css);
    console.log("Styles compiled succesfully");
} catch (err) {
    console.error(err.message);
}
