const logo = require('./logo');
const keypress = require('keypress');
const chalk = require('chalk');
const genPass = require('./genpass');
const checkUpdate = require('./checkupdate');

logo();

setTimeout(() => {
    checkUpdate();
}, 3555);

const app = () => {
    console.clear();

    console.log(chalk.green('❯ Press P to access.')); //This will probably improve
    console.log('');
    console.log(chalk.red('❯ Press X to exit.'));

    keypress(process.stdin);

    process.stdin.on('keypress', function (ch, key) {
        if (key.name == 'p') {
            genPass();
        } else if(key.name == 'x'){
            console.clear();
            process.stdin.pause();
        }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
}

module.exports = app;