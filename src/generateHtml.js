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
