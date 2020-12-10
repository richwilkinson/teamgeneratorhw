//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const renderHtml = require("./lib/htmlRenderer");
//classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

renderHtml(teamMembers);

const teamMembers = [];

const startupQueue = () => {
    inquirer.prompt([{
        type: "input",
        message: "Name & Assemble the crew",
        name: "teamName"
    }]).then(function(data){
        const teamName = data.teamName;
        teamMembers.push(teamName);
        addEmployee();
    })
}
//Questions for user input/ team info
function addManager() {
    inquirer.prompt([{
        type: "input",
        message: "Enter team manager's name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter ID for this team member",
        name: "id"
    },
    {
        type: "input",
        message: "enter employee email",
        name: "email"
    },
    {
        type: "input",
        message: "enter manager's office number",
        name: "officeNumber"
    },

]).then(function(data) {
    const name = data.name;
    const id = data.id;
    const email = data.email;
    const office = data.officeNumber
    const newMan = new Employee(name, id, email, office);
    teamMembers.push(newMan);
    moreTeam();
});
}
function moreTeam() {
    inquirer.prompt([{
        type: "list",
        message: "Do you want to assemble more of the crew?",
        choices: ["Yes, add an engineer", "Yes, add a manager", "Yes add an intern", "No, my crew has been assembled!"],
        name: "addMoreCrew"
    }]).then(function(data) {
        switch (data.addMoreCrew) {
            case "Yes, add an engineer":
                addEngineer();
                break;
            case "Yes, add a manager":
                addManager();
                break;
            case "Yes, add an intern":
                addIntern();
                break;
            case "No, my crew has been assembled!":
                finalizeTeam();
                break;
        }
    })
}
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name of Engineer",
            name: "name"
        },
        {
            type: "input",
            message: "Provide ID for this engineer",
            name: "id"
        },
        {
            type: "input",
            message: "What is this engineer's email",
            name: "email"
        },
        {
            type: "input",
            message: "What is this engineer's Github?",
            name: "github"
        },
    ]).then(function(data) {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const github = data.github;
        const newEng = new Engineer(name, id, email, github);
        teamMembers.push(newEng);
        moreTeam()
    })
}
