const inquirer = require('inquirer');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Write a description of your project:',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Input usage information here:',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Write installation directions here:',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'Add credits here:',
    },
    {
      type: 'input',
      name: 'Contributers',
      message: 'Add contributers here:',
    },
    {
      type: 'input',
      name: 'LinkedIn',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'Enter your email address here:',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'Enter your Github username here:',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Enter test information',
    },
    {
      type: 'list',
      name: 'License',
      message: 'What license would you like to use?',
      choices: ['MIT', 'Apache', 'GPL', 'BSD'],  
    },
  ]);
};

const generateReadme = ({ Title, Description, Usage, Installation, Credits, Contributers, Linkedin, Email, Github, Tests, License }) =>

//here is where the readme boiler plate goes, b/n the backticks  
`##Title
    ${Title}

##Description
    ${Description}

##Usage
    ${Usage}

##Installation
    ${Installation}

##Credits
    ${Credits}

##Contributers
    ${Contributers}

##Linkedin
    ${Linkedin}

##Email
    ${Email}

##Github
    ${Github}

##Tests
    ${Tests}

##License
    ${License}
`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('readme.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
};

init();