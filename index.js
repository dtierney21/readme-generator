// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Project Description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation Instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Useage Info:',
        name: 'usageInfo'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines:',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Tests:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'License Type:',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC', 'Other']
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw new Error(err);
        console.log('README Successfully Generated!');
    }); 
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(answers => {
        const data = generatePage(answers);
        console.log(answers);
        writeToFile('./readme/README.md', data, err => {
            err ? console.error(err) : console.log('Success!')
        });
    });
}

// Function call to initialize app
init();
