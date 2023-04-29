const fs = require('fs');
const path = require('path'); //I learned this after googling "path not defined"
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'Pleae provide the TITLE of your PROJECT:',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your NAME?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the CONTENT and FUNCTIONALITY of your PROJECT:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to INSTALL your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which LICENSE did you use?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 2', 'BSD 3', 'Eclipse', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Were there any contributors to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Were any tests written to this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter a valid EMAIL address:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter a valid Github USERNAME:',
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile('./dist/README.md', generateMarkdown({...responses}));
    });
}
init();