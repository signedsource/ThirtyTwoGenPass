const chalk = require('chalk');
const carden = require('carden');
const randomize = require('randomatic');

const randomizerCharacters = () => {
    console.clear();

    console.log('Generate a Secure Password of 32 Characters.')

    console.log('');

    const randomizeCharacters = randomize('*', 32); 

    console.log(chalk.underline.green('Generated Password: ' + randomizeCharacters))

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
    console.log(''); 
    console.log(carden('❯ Press SPACE to generate a password.',
        '❯ Press X to exit.', {
        header: {
            backgroundColor: 'blue'
        }
    }));
}

module.exports = randomizerCharacters;