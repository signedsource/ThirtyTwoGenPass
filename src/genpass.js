const chalk = require('chalk');
const carden = require('carden');
const keypress = require('keypress');
const randomizer = require('./randomizer');

const genPass = () => {
    console.clear();

    keypress(process.stdin);

    process.stdin.on('keypress', function (ch, key) {
        if (key.name == 'space') {
            randomizer();
        } else if (key.name == 'x') {
            console.clear();
            process.stdin.pause();
        }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();

    console.log('Generate a Secure Password of 32 Characters.')

    console.log('');

    console.log(chalk.underline.green('Generated Password: '))

    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log(''); //Yes, this is the best way to put letters in a certain place in the terminal. (It's not true)
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log(carden('❯ Press SPACE to generate a password.',
        '❯ Press X to exit.', {
        header: {
            backgroundColor: 'blue'
        }
    }));

}

module.exports = genPass;