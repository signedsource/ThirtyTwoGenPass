const axios = require('axios'); 
const version = require("../version.json"); 
const chalk = require("chalk"); 
const path = require("path");

const update = async () => {
    await axios.get('https://raw.githubusercontent.com/signedsource/ThirtyTwoGenPass/main/version.json') 
        .then(async function (response) {
            if (response.data.version > version.version) {
                console.clear();

                const child = require('child_process').exec('git pull origin main', { cwd: path.dirname(__dirname)});
                const loading = require("loading-indicator"); 
                loading.start("Updating a new version...");

                await new Promise((resolve) => {
                    child.on('close', resolve)
                });
                
                setTimeout(() => {
                    console.log(chalk.green("Updated! Restart the app"));
                    process.exit();
                }, 100);
            } else if (response.data.version == version.version) {
                console.clear();
                const loading = require("loading-indicator"); 

                const loadingApp = loading.start("Loading the app...");

                setTimeout(() => {
                    loading.stop(loadingApp);
                }, 1600);
            } else {
                console.log(chalk.red("Could not check the program version.\nPlease clone the repository in another folder in case you want to use the program"));
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

module.exports = update;