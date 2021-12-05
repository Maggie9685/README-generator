// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = projectData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username: ',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address: ',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title?',
            validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter project title!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter project description: ',
            validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter project description!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'InstallInst',
            message: 'Enter installation instructions: ',
            validate: InstallInstInput => {
            if (InstallInstInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information: ',
            validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines: ',
            validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'testInst',
            message: 'Enter test instructions: ',
            validate: testInstInput => {
            if (testInstInput) {
                return true;
            } else {
                console.log('Please enter test instructions!');
                return false;
            }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Pick a license for your application",
            choices: ["Apache", "GNU", "MIT", "None"]
        }
    ])
  };

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };  

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(projectData => {
        return generateMarkdown(projectData);
      })
      .then(ReadMeFile => {
          return writeToFile(ReadMeFile);
      })
      .then(writeToFileResponse => {
        console.log(writeToFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
    
}

// Function call to initialize app
init();
