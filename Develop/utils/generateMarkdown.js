// function to generate markdown for README
function generateReadme(responses) {
  return `

    ## Project Name
    ${responses.projectName}

    ## Creator
    ${responses.username}

    ## Project Description 
    ${responses.description}

    ## Table of Contents
345rt
    ## Usage
    ${responses.usage}

    ## Technology Overview
    ${responses.technology}

    ## Licenses
    ${responses.license}

    ## Contributing
    ${responses.contributors}

    ## Testing
    ${responses.tests}

    ## Questions
    ${responses.questions}

`;
}

exports.generateReadme = generateReadme();
