// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please give a description for the project.',
        name: 'description'     
    },
    {
        type: 'input',
        message: 'Please give instructions for the installation.',
        name: 'installation'
    },
    {
        type: 'list',
        message: 'Please choose the license for this project',
        name: 'license',
        choices: ['Apache 2.0', 'GNU GPL v3', 'MIT', 'MPL 2.0', 'none']
    },
    {
        type: 'input',
        message: 'Please give information on the usage',
        name: 'usage'   
    },
    {
        type: 'input',
        message: 'Please give information on contributing guidelines',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to run tests',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please type your Github username',
        name: 'githubUsername'
    }
];

// Function to write README file
function writeToFile(fileName, data) {}

// Function to initialize app
function init() {}

// Function call to initialize app
init();
