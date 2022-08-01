// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license != null) {
        let color;
        switch (license) {
            case 'MIT':
                color = 'yellow'
                break;
            case 'GNU':
                color = 'blue'
                break;
            case 'Apache':
                color = 'green'
                break;
            case 'BSD':
                color = 'orange'
                break;
            case 'ISC':
                color = 'blue'
                break;
            case 'Other':
                color = 'lightgrey'
                break;                
        }
        return `https://img.shields.io/badge/license-${license}-${color}.svg`;
    }
    return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license != null) {
        return `https://choosealicense.com/licenses/${license}/`;
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license != null) {
        fetch(`https://api.github.com/licenses/${license}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data[0].body;
        });
    }
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
   # ${data.title}

   ## Description
   ${data.description}

   ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [License](#license)
   * [Questions](#questions)

   ## Installation
   ${data.installation}

   ## Usage
   ${data.usageInfo}

   ## License
   ![License](${renderLicenseBadge(data.license)}) <br />
   ${renderLicenseLink(data.license)}

   ## Contributing
   ${data.contribution}

   ## Tests
   ${data.tests}

   ## Questions
   GitHib Profile: htttps://github.com/${data.github} <br />
   You can reach me at ${data.email} with any questions.
   `;
}

module.exports = generateMarkdown;
