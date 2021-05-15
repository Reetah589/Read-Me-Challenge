// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require("fs")

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
  return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}



inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
