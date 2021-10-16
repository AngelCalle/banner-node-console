const chalk = require('chalk');
var fs = require('fs');

const fileName = 'banner.txt';
const log = console.log;

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(chalk.orange(data));
    // log(chalk.blue('Hello') + ' World' + chalk.red('!'));
    log(
        chalk.bgRgb(100, 0, 63).bold.rgb(253, 112, 32)`${data}`
        );
});
