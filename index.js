// ON YOUTUBE: 
// https://youtu.be/FsgsoDR-3o0 


// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// need this? 
// import generateMarkdown from './utils/generateMarkdown.js';




// TODO: Create an array of questions for user input
// const questions = [];
const questions = [
    {
      message: 'Enter the name of your app:',
      name: 'title'
    },
    {
      message: 'Enter a description of your app. Include your motivation and reasoning behind the app idea, what issues the app solves, and what you learned from the development process:',
      name: 'projectDescription'
    },
    {
      message: 'Enter installation instructions:',
      name: 'installInfo'
    },
    {
      message: 'Enter some instructions on how to use the application:',
      name: 'usageInfo'
    },
    {
      message: 'Provide credits for any contributors, development tools or tutorials that are applicable:', 
      name: 'creditInfo'
    },
    {
      message: 'Please choose a license for your application:', 
      name: 'licenseChoice',
      type: 'list',
      choices: ['Academic Free License v3.0', 'Apache License v2.0', 'MIT No Attribution License', 'The Unlicense', 'Mozilla Public License v2.0', {name: 'None', value: false}]
    },
    {
      message: 'Please include any applicable instructions on how to test your app:', 
      name: 'testInstructions'
    },
    {
      message: 'Please provide an email address one can send questions regarding your app: ',
      name: 'userEmail'
    }, 
    {
        message: 'Please provide a link to your GitHub account as well:',
        name: 'gitHub'
    }
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
            const data = await inquirer.prompt(questions);
            const markdown = generateMarkdown(data);
            // console.log(markdown);
            writeToFile('./README.md', markdown);
            break;
        default:
            console.log('\nThanks for using the markdown generator! Goodbye...');
        // break; I THINK THIS IS SUPPOSED TO BE HERE 
    }
}




// Function call to initialize app
init();

export default init;