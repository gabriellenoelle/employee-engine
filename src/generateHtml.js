module.exports = generateHtml;

function generateHtml(data) {
  return `
  <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width-device-width, initial-scale=1.0/>

        <link rel="stylesheet" href="style.css"/>
        <title> ${data.Title} </title>
    </head>
    <body>
        <header> ${data.Header} </header>
    </body>
    </html>
    `;
}
const fs = require("fs");

// writing files
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// copying file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Stylesheet created!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
