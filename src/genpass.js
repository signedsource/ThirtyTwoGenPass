const chalk = require('chalk');

const genPass = () => {
    console.clear();
    console.log('This part of the program its in process of building')

    console.log('');
    console.log('');
    console.log('');
    console.log(''); //Yes, this is the best way to put letters in a certain place in the terminal. (It's not true)
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log(chalk.red('❯ Press X to exit.'));
}

module.exports = genPass;