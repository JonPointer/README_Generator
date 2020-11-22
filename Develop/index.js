// Require inquirer and fs packages 
const inquirer = require('inquirer');

// Require file for writing data
const generateMarkdown = require('./utils/generateMarkdown.js');

// Prompt user and then call function to write data to file
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
    ])
    .then((response) => {
        generateMarkdown.writeData(response);
    }
    );
