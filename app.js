const inquirer = require("inquirer");
const fs = require("fs");

//classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');

const path = require('path');
const newSite = require("./src/newSite");
const OUTPUT_DIR = path.resolve(__dirname, "result")
const outputPath = path.join(OUTPUT_DIR, "newTeam.html");
const Employee = [];

const startApp = () => {
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
                Employee.push(manager);
                promptMenu();
            })
                
        };
    

//     PROMPT MENU OPTION //

function promptMenu() {
	inquirer.prompt([
			{
				name: 'menu',
				type: 'list',
				message: 'Please select member role:',
				choices: ['Engineer', 'Intern', '-- Finish Team --'],
			},
		])
		.then((userChoice) => {
			switch (userChoice.menu) {
				case 'Engineer':
					addEngineer();
					break;
				case 'Intern':
					addIntern();
					break;
				default:
					renderTeam();
			}
		});
}

//   ADDING ENGINEER ////
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('NOT A VALIND INPUT');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter Engineer ID',
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
            message: 'Please enter Engineer Email',
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
            name: 'gitHub',
            message: 'Please enter Engineer Github Account',
            validate: gitHubInput => {
                if (gitHubInput){
                    return true;
                } else {
                    console.log('--NOT A VALID INPUT')
                    return false;
                }
             },
        },
    ]).then(answers =>{
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        Employee.push(engineer);
        promptMenu();
    })
        
}
  //   ADDING Intern ////
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('NOT A VALIND INPUT');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter Intern ID',
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
            message: 'Please enter Interns Email',
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
            name: 'school',
            message: 'Please enter Interns School Name',
            validate: schoolInput => {
                if (schoolInput){
                    return true;
                } else {
                    console.log('--NOT A VALID INPUT')
                    return false;
                }
             },
        },
    ]).then(answers =>{
        console.log(answers);
        const intern = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        Employee.push(intern);
        promptMenu();
    })     
}  

const renderTeam = () => {
    console.log(' Finished the Team!!');
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, newSite(Employee), "utf-8");
}

startApp();



