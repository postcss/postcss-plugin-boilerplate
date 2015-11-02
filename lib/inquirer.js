var inquirer = require('inquirer');

module.exports = {
    prompt: function (questions) {
        return new Promise(function (resolve) {
            inquirer.prompt(questions, resolve);
        });
    }
};
