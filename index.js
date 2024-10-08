// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// need this? 
// import generateMarkdown from './utils/generateMarkdown.js';




// TODO: Create an array of questions for user input
// const questions = [];
const questions = [
    'Enter the name of your app:',
    'Enter a description of your app. Include your motivation and reasoning behind the app idea, what issues the app solves, and what you learned from the development process:',
    'Enter installation instructions:',
    'Enter some instructions on how to use the application:',
    'Provide credits for any contributors, development tools or tutorials that are applicable', 
    'Please choose a license for your application:', 
    'Please include any applicable instructions on how to test your app:', 
    'Please provide an email address one can send questions regarding your app: '
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    /*
  Once you have the data array, you will use the fs module/package to write a .md file named README.md. The data for that file will be a template string

  With the writeFile method on fs, you pass in the data string as the second argument
  */
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }

        console.log('Markdown file generated successfully!');
    });
}




// TODO: Create a function to initialize app
// MAKING THIS THE MAIN MENU FUNCTION 
async function init() {
    const answersObj = await inquirer.prompt({
        message: 'Please select an option',
        name: 'menuChoice',
        type: 'list',
        choices: ['Create Markdown File', 'Exit']
    });

    switch (answersObj.menuChoice) {
        case 'Create Markdown File':
            writeToFile('./README.md', generateMarkdown(questions));
            break;
        default:
            console.log('\nThanks for using the markdown generator! Goodbye...');
        // break; I THINK THIS IS SUPPOSED TO BE HERE 
    }
}




// Function call to initialize app
init();

export default init;