// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `[![MIT license](https://img.shields.io/badge/License-MIT-yellowgreen.svg)](https://lbesson.mit-license.org/)`;
      }else
      return "";
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license!== "none") {
      return `[License](#license)`;
    }else
      return "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "none") {
      return `## License
    This project is licensed under the ${license} license.`;
    }else
      return "";
  }

  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `## ${data.project}
  by ${data.name} 
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions/Contact Me
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}, or
  You can find me on GitHub at [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;