const logo = () => {
    const cols = process.stdout.columns;
    const rows = process.stdout.rows;
    const figlet = require('figlet');
    
    console.clear();
    
    var spaces1 = [];
    var spaces2 = [];
    
    (async () => {
        let str = figlet.textSync('ThirtyTwoGenPass', {
            font: 'Small',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 75,
            whitespaceBreak: true
        });
    
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
                for (let i = 0; i < Math.trunc((cols / 2) - (width / 2)); i++) {
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
}

//Created by latitud-dev

module.exports = logo;