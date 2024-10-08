// TODO: Include packages needed for this application
import inquirer from 'inquirer';
// need this? 
// import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
            generateMarkdown();
            break;
        default:
            console.log('\nThanks for using the markdown generator! Goodbye...');
            // break; I THINK THIS IS SUPPOSED TO BE HERE 
    }
}

// Function call to initialize app
init();

export default init;