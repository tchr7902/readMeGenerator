// adding variables to later fill
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


// function that renders the badge license, takes the license value and appends the corresponding badge
function renderLicenseBadge(license) {
  if(license == 'Apache 2.0') {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == 'MIT License') {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else { 
    badge = '';
  }
}

// function that renders and appends the corresponding license link
function renderLicenseLink(license) {
  if(license == 'Apache 2.0') {
    link = `[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license == 'MIT License') {
    link = `[MIT License](https://www.mit.edu/~amini/LICENSE.md)`
  } else { 
    link = '';
  }
}

// generates the README file with the given answers from the prompts
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  return `${badge}\n\n# ${data.title}\n\n## Description\n${data.description}\n\n${tableOfContents}\n\n## Installation\n${data.installation}\n\n## Usage \n${data.usage}\n\n## License \n${link}\n\n## Contributors \n${data.contributing}\n\n## Tests \n${data.tests}\n\n## Questions? \n${github + data.faq})\n\n${data.email}`;
}

// exports the function
module.exports = generateMarkdown;
