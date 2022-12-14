// Packages needed for this application
const markdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Project Description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Useage Info:',
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Tests:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'License Type:',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC', 'Other'],
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README Successfully Generated!');
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = markdown(answers);
        writeToFile('./readme/README.md', data);
    });
}

// Function call to initialize app
init();
