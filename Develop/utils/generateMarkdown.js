// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None"){
    return "";
  }else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "None"){
    return "";
  }else {
    return "* [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None") {
    return "";
  } else {
    return `## License

  This project is licensed under the ${license} license.`;
  } 
}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  return ` 
  # ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ## Description 

  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.InstallInst}
  
  ## Usage 
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.testInst}
  
  ## Questions

  Question? Send an email to ${data.email}

  You can also check my other work on my [GitHub Profile](https://github.com/${data.github}) 
  
`;
}
