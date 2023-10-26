// brings in different files
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// questions array for user input
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
      name: 'installation',
      message: (answers) => `What is the installation of ${answers.title}?`,
    },
    {
      type: 'input',
      name: 'usage',
      message: (answers) => `What is the usage of ${answers.title}?`,
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please choose a license',
      choices: [ 
        { name: 'MIT License', value: 'MIT License' },
        { name: 'Apache 2.0', value: 'Apache 2.0' },
        { name: 'None', value: '' } 
    ]
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
      message: 'What is your GitHub username so any users can ask questions?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'And your email?',
      },
  ];

// function to write the given data to the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`${fileName} has been successfully generated!`)
        }
    });
}

// function that initializes the functions
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);

        writeToFile('README.md', readmeContent)
    })
}

init();
