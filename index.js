// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require("fs");
const { title } = require('process');
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
var questions = [{
  name: "title",
  message: "What is your title?",
  type: "input"
},
{  name: "description",
   message: "Please provide a description?",
   type: "input"
}];





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