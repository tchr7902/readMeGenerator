// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge = '';
let link = '';
let github = `[Contact me!](https://github.com/`
let tableOfContents = `## Table of Contents\n
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)\n`

function renderLicenseBadge(license) {
  if(license === 'apache') {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'mit') {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else { 
    badge = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'apache') {
    link = `[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license === 'mit') {
    link = `[MIT License](https://www.mit.edu/~amini/LICENSE.md)`
  } else { 
    link = '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  return `${badge}\n\n# ${data.title}\n\n## Description\n${data.description}\n\n${tableOfContents}\n\n## Installation\n${data.installation}\n\n## Usage \n${data.usage}\n\n## License \n${link}\n\n## Contributors \n${data.contributing}\n\n## Tests \n${data.tests}\n\n## Questions? \n${github + data.faq})\n\n${data.email}`;
}

module.exports = generateMarkdown;
