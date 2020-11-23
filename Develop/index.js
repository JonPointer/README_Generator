// Require inquirer and fs packages 
const inquirer = require('inquirer');

// Require file for writing data
const generateMarkdown = require('./utils/generateMarkdown.js');

// Prompt user and then call function to write data to file
inquirer
    .prompt([
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
            message: 'Usage Information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Contribution Guidelines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Test Instructions:',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Choose License:',
            choices: ["GNU_AGPLv3", "GNU_GPLv3", "GNU_LGPLv3", "Mozilla_Public_License_2.0", "Apache_License_2.0", "MIT_License", "Boost_Software_License_1.0", "The_Unlicense"],
            name: 'license',
        },
        {
            type: 'input',
            message: 'GitHub Username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Email Address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Complete Path to Screenshot:',
            name: 'screen',
        },
    ])
    .then((response) => {
        generateMarkdown.writeData(response);
    }
    );
