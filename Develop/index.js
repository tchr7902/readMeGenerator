// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: (answers) => `Write a description for ${answers.title}:`,
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'What will the table of contents be?',
    },
    {
      type: 'input',
      name: 'installation',
      message: (answers) => `What is the installation of ${answers.title}?`,
    },
    {
      type: 'input',
      name: 'usage',
      message: (answers) => `What is the usage of ${answers.title}?`,
    },
    {
      type: 'input',
      name: 'license',
      message: 'What is the license used?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who contributed?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How will it be tested?',
    },
    {
      type: 'input',
      name: 'faq',
      message: 'Are there any frequently asked questions for the project?',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`${filename} successfully generated!`)
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        console.log(readmeContent)

        writeToFile('README.md', readmeContent)
    })
}

// Function call to initialize app
init();
