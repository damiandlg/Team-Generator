const inquirer = require("inquirer");
const fs = require("fs");

//classes
const Manager = require("lib/Manager.js");
const Intern = require("lib/Intern.js");
const Engineer = require("lib/Engineer.js");
const { type } = require("os");
const { listenerAdded } = require("emittery");

const Employee = [];

function startApp() {
    inquirer.prompt([
        {
            name: 'StartApp'
            type: 'confirm'
            message: 'Want to generate a team?',
        }
    ]).then((res,err) => {
        if (err) console.error(err);
        if (res.startApp) {
            addEngineer();
        } else {
            process.exit();
        }
    });

    function addManager(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter Managers name',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log('--NOT A VALID INPUT')
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter Managers ID',
                validate: idInput => {
                    if (idInput){
                        return true;
                    } else {
                        console.log('--NOT A VALID INPUT')
                        return false;
                    }
                 },
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter Managers Email',
                validate: emailInput => {
                    if (emailInput){
                        return true;
                    } else {
                        console.log('--NOT A VALID INPUT')
                        return false;
                    }
                 },
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter Managers #',
                validate: numberInput => {
                    if (numberInput){
                        return true;
                    } else {
                        console.log('--NOT A VALID INPUT')
                        return false;
                    }
                 },
            },
            ]).then(answers =>{
                console.log(answers);
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                employees.push(manager);
                promptMenu();
            })
                
        };
    }
    









}
