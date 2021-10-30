// runs the application
const inquirer = require("inquirer");
const fs = require("fs");
// const lib = require("./lib");
const generateHtml = require("./src/generateHtml");

// Questions that wil prompt user to input employee data
const questions = [
  {
    type: "input",
    message: "Hello! What is your name?",
    name: "Manager",
  },
];

// Function to create the HTML file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Yay! It worked!");
    }
  });
}

// Function that will initialize the application
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("index.html", generateHtml(data));
    console.log(data);
  });
}

//Function call to initialize application
init();
