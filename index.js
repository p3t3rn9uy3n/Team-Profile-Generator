const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const manager = require('.lib/manager');
const engineer = require('.lib/engineer');
const intern = require('.lib/intern');
const employee = require('.lib/employee');
const genMarkdown = require('./utils/generateMarkdown');


// manager question array
const questions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "manager"
    },
    {
        type: "input",
        message: "What is the team manager's ID?",
        name: "managerid"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "manageremail"
    },
    {
        type:"input",
        message: "What is the team manager's office number?",
        name: "managernumber",
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "teammember",
        choices: [
            "Engineer",
            "Intern",
            "I do not want to add anymore members"
        ]
    },
];

function init() {
    inquirer.prompt(questions)
    .then((info) => {
        writeToFile('./src/index.html' , genMarkdown(info))
    })
}

init();