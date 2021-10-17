const logo = require('./logo');
const keypress = require('keypress');
const chalk = require('chalk');
const genPass = require('./genpass');
const checkUpdate = require('./checkupdate');
const carden = require('carden');

logo();

setTimeout(() => {
    checkUpdate();
}, 3555);

const app = () => {
    console.clear();

    console.log(carden('❯ Press P to access.',
        '❯ Press X to exit.', {
        header: {
            backgroundColor: 'green'
        }
    }));

    keypress(process.stdin);

    process.stdin.on('keypress', function (ch, key) {
        if (key.name == 'p') {
            genPass();
        } else if (key.name == 'x') {
            console.clear();
            process.stdin.pause();
        }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
}

module.exports = app;