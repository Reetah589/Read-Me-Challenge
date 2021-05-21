// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require("fs");
const { title } = require('process');

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



inquirer
 /* Pass your questions in here */
  .prompt(questions)
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
    console.log(answers.title)
    console.log(answers.description)
    // use the writeToFile function here
    writeToFile("Readme-Test.md", answers.title + "\n" + answers.description
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
