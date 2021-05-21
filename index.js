// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require("fs");
const { title } = require('process');
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
var questions = [{
   name: "title",
   message: "Please enter the name of your project.",
   type: "input"
},
{  name: "description",
   message: "Please provide a description of your project.",
   type: "input"
},
{  name: "installation",
   message: "Please enter the instructions for installation process.",
   type: "input"
},
{  name: "usage",
   message: "Please provide usage information such as devices, memory installed, etc.",
   type: "input"
},
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data); 
}


function init (){
  inquirer
 /* Pass your questions in here */
  .prompt(questions)
  .then(data => {
    // Use user feedback for... whatever!!
    console.log(data)
    console.log(data.title)
    console.log(data.description)
    console.log(data.installation)
    console.log(data.usage)
    // use the writeToFile function here
    writeToFile("Readme.md", generateMarkdown ({...data})
    )
  })
  .catch(error => {
    console.log(error)
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

init();