const carden = require('carden');
const keypress = require('keypress');
const chalk = require('chalk');
const update = require('./updater');

const checkUpdate = () => {

    const windowsUpdate = carden('Check Update',
        (chalk.black(` Do you want to check if there is a new version of the program available? 

                              -Y/N keys-`)), {
        borderStyle: 'double',
        borderColor: 'black',
        backgroundColor: 'white',
        header: {
            backgroundColor: 'blue',
            padding: 1
        }
    });

    const cols = process.stdout.columns;
    const rows = process.stdout.rows;

    console.clear();

    var spaces1 = [];
    var spaces2 = [];

    (async () => {
        let str = windowsUpdate;

        const width = str.split("\n")[0].length;
        const height = str.split("\n").length;

        await Promise.all([
            (async () => {
                for (let i = 0; i < (((cols * rows) / 2) - (height * width)) - cols; i++) {
                    spaces1.push(" ")
                }
            })()
        ]);

        await Promise.all([
            (async () => {
                for (let i = 0; i < Math.trunc((cols / 2) - (width / 2.2)); i++) {
                    spaces2.push(" ");
                }
            })()
        ]);

        await Promise.all([
            str = str.split("\n"),
            str.forEach(l => {
                str[str.indexOf(l)] = `${spaces2.join("")}${str[str.indexOf(l)]}`;
            })
        ]);

        await Promise.all([
            console.log(spaces1.join("")),
            console.log(str.join("\n")),
            console.log(spaces1.join(""))
        ]);
    })();

    keypress(process.stdin);

    process.stdin.on('keypress', function (ch, key) {
        if (key.name == 'y') {
            const app = require('./app');
            update(); //todo: building this part
            app();
        } else if (key.name == 'n') {
            const app = require('./app');
            app();
        }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
}

module.exports = checkUpdate;

//Thanks to latitud-dev by the script to center text in the terminal.