//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");



const employees = [];

function nameCrew(){
    inquirer.prompt([{
        type: "input",
        message: "Name your crew",
        name: "teamName"
    }
]).then(function(data) {
    const teamName = data.teamName;
    const newT = new Employee(teamName);
    employees.push(newT);
    addManager();
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
    const newMan = new Manager(name, id, email, office);
    employees.push(newMan);
    addTeam();
});
}
function addTeam() {
    inquirer.prompt([{
        type: "list",
        message: "Do you want to assemble more of the crew?",
        choices: ["Yes, add an engineer", "Yes, add a manager", "Yes, add an intern", "No, my crew has been assembled!"],
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
                completeTeam();
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
        employees.push(newEng);
        addTeam()
    })
}
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is the name of this intern?",
            name: "name"
        },
        {
            type: "input",
            message: "please provide the ID for this intern",
            name: "id"
        },
        {
            type: "input",
            message: "Provide the email for this intern",
            name: "email"
        },
        {
            type: "input",
            message: "What school did this intern attend",
            name: "school"
        }
    ]).then(function(data) {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const school = data.school;
        const newInt = new Intern(name, id, email, school);
        employees.push(newInt)
        addTeam()
    })
};
function completeTeam() {
    console.log("The crew has been assembled!")
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8");
}
nameCrew();
