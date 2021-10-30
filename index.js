const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const generateHtml = require("./src/generateHtml.js");
const { writeFile, copyFile } = require("./src/generateHtml.js");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Hello! What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee ID?",
      default: true,
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter your employee ID!");
          return false;
        }
      },
    },
  ]);
};

const promptProject = (portfolioData) => {
  console.log(`
=================
Add a New Employee
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return (
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the new employee? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter the employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You need to enter a project description!");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "employeetypes",
        message: "What type of employee is this person?",
        choices: ["Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        name: "link",
        message: "Enter the employee's GitHub profile link, if applicable.",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need to enter a project GitHub link!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this employee?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another employee?",
        default: false,
      },
    ]),
    // .then((projectData) => {
    //   portfolioData.projects.push(projectData);
    //   if (projectData.confirmAddProject) {
    //     return promptProject(portfolioData);
    //   } else {
    //     return portfolioData;
    //   }
    // });

    promptUser()
      .then(promptProject)
      .then((portfolioData) => {
        return generateHtml(portfolioData);
      })
      .then((pageHTML) => {
        return writeFile(pageHTML);
      })
      .then((writeFileResponse) => {
        console.log(writeFileResponse);
        return copyFile();
      })
      .then((copyFileResponse) => {
        console.log(copyFileResponse);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};
