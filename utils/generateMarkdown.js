// Import inquirer 
import inquirer from 'inquirer';
import questions from '../index.js';


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Academic Free License v3.0') {
    return `![AFL License v3.0 badge](https://img.shields.io/badge/license-AFL_v3.0-blue.svg)`;
  } else if (license === 'Apache License v2.0') {
    return `![Apache License v2.0 badge](https://img.shields.io/badge/license-Apache_v3.0-blue.svg)`;
  } else if (license === 'MIT No Attribution License') {
    return `![MIT No Attribution License badge](https://img.shields.io/badge/license-MIT_No_Attribution-blue.svg)`;
  } else if (license === 'The Unlicense') {
    return `![The Unlicense badge](https://img.shields.io/badge/license-The_Unlicense-blue.svg)`;
  } else if (license === 'Mozilla Public License v2.0') {
    return `![Mozilla Public License v2.0 badge](https://img.shields.io/badge/license-Mozilla_Public_License_v2.0-blue.svg)`;
  } else {
    return '';
  }
}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Academic Free License v3.0') {
    return `[Link to more info about AFL License](https://opensource.org/license/afl-3-0-php)`;
  } else if (license === 'Apache License v2.0') {
    return `[Link to more info about Apache License](https://opensource.org/license/apache-2-0)`;
  } else if (license === 'MIT No Attribution License') {
    return `[Link to more info about MIT No Attribution License](https://opensource.org/license/mit-0)`;
  } else if (license === 'The Unlicense') {
    return `[Link to more info about The Unlicense](https://opensource.org/license/unlicense)`;
  } else if (license === 'Mozilla Public License v2.0') {
    return `[Link to more info about Mozilla Public License v2.0](https://opensource.org/license/mpl-2-0)`;
  } else {
    return '';
  }
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License 
  This project is licensed under the ${license} license. <br>For more information, please visit: ${renderLicenseLink(license)}`;
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  const markdown = `
# ${data.title}
## Description
${data.projectDescription} <br><br>
${renderLicenseBadge(data.licenseChoice)}
## Table of Contents 
- [Installation](#installation) 
- [Usage](#usage)
- [Credits](#credits) 
${data.licenseChoice ? '- [License](#license)' : ''}
- [Testing](#testing) 
- [Questions](#questions)
## Installation
${data.installInfo}
## Usage
${data.usageInfo}
## Credits
${data.creditInfo}
${renderLicenseSection(data.licenseChoice)}
## Testing
${data.testInstructions}
## Questions
If you have any questions regarding this application, you may send them to: ${data.userEmail} <br>
Link to developer GitHub profile: ${data.gitHub}
`;

  return markdown.replace(/\t/g, '');


}

export default generateMarkdown;
