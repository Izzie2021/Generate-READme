// TODO: Include packages needed for this application
package.json

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Say hello to your READme generator! Provide your full name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('A name must be entered!');
                return false;
            }
        }
    },

    function writeToFile(fileName, data) { }

function init() { }

init();
