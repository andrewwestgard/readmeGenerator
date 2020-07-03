// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// const practiceFunction = require('./utils/practiceFunction');

// console.log(practiceFunction())

//define a variable in order for the various functions to be able to use promise methods
const writeFileAsynch = util.promisify(fs.writeFile);

function questionUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "what is the project name?",
            name: "projectName"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
        },
        {
            type: "input",
            message: "Give a description of your project",
            name: "projectDes"
        },
        {
            type: "input",
            message: "What are the sections of your applications?",
            name: "TOC"
        },
        {
            type: "input",
            message: "What are the user stories?",
            name: "usage"
        },
        {
            type: "input",
            message: "What technologies/frameworks did you use in this project",
            name: "technology"
        },

        {
            type: "list",
            message: "What license do you need?",
            choices: ["MIT", "Other", "Other"],
            name: "license"
        },
        {
            type: "input",
            message: "Who contributed to the project?",
            name: "contributors"
        },
        {
            type: "input",
            message: "Enter Test Instructions",
            name: "tests"
        },
        {
            type: "input",
            message: "Enter Question guidelines",
            name: "questions"
        }
    ])
}


//function generate readme

function generateReadme (responses) {
    return `

        ## Project Name
        ${responses.projectName}
    
        ## Creator
        ${responses.username}

        ## Table of Contents
    
        ## Project Description 
        ${responses.description}

        ## Usage
        ${responses.usage}
    
        ## Technology Overview
        ${responses.technology}
    
        ## Licenses
        ${responses.license}
    
        ## Contributing
        ${responses.contributors}
    
        ## Testing
        ${responses.tests}
    
        ## Questions
        ${responses.questions}
    
    `;
}

questionUser()
    .then(function(responses){
        const readme = generateReadme(responses);

        return writeFileAsynch("README.md", readme);
    })

    .then(function() {
        console.log('Successfully created a README.md');
    })

    .catch(function(err) {
        console.log(err);
    });



// function toWriteFile
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md' )
// }


// // function to initialize program
// function init() {
// }

// // function call to initialize program
// init();
