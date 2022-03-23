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

// Function that returns the license section of README
// function that puts the appropriate message in the license section
function renderLicenseSection(license){
  if (license && license !== 'none'){
    return `This application is covered under the ${license} license.`
  } else {
    return `This application does not have a license.`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Contributing](#contributing)

- [Tests](#tests)

- [License](#license)

- [Questions](#questions)

## Installation 
${data.installation}

## Usage 
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}

## Questions
Github link: https://github.com/${data.github}

If you have any additional questions, feel free to reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
