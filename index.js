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
