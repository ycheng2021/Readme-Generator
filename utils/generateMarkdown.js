// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    if (license === 'Apache 2.0') {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === 'GNU GPL v3') {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (license === 'MIT') {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === 'MPL 2.0'){
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    } else {
      return ""
    }
  } else {
    return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    if (license === 'Apache 2.0') {
      return "https://www.apache.org/licenses/LICENSE-2.0"
    } else if (license === 'GNU GPL v3') {
      return "https://www.gnu.org/licenses/gpl-3.0.en.html"
    } else if (license === 'MIT') {
      return "https://www.mit.edu/~amini/LICENSE.md"
    } else if (license === 'MPL 2.0'){
      return "https://www.mozilla.org/en-US/MPL/2.0/"
    } else {
      return ""
    }
  } else {
    return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    ## License 

    ${renderLicenseBadge}
    ${renderLicenseLink}
    `
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseSection}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)
  -[Links](#links)

  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  My Github username is ${data.githubUsername}
  
  ## Links
  
  `;
}

module.exports = generateMarkdown;
