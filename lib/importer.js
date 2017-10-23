var fs = require('fs');
var _ = require('lodash');

var importFile=(file)=>fs.readFileSync(file).toString().split(/\r?\n/)

var words=importFile('./imports/words.txt');
var fonts=importFile('./imports/fonts.txt');


// List of words were imported from
// http://grammar.yourdictionary.com/parts-of-speech/adjectives/list-of-adjective-words.html
module.exports.getWord= ()=> _.sample(words);


// Fonts were imported from
// https://github.com/patorjk/figlet.js/tree/master/fonts
module.exports.getFont= ()=> _.sample(fonts);

module.exports.TheSecret= "<pre>"+fs.readFileSync('./imports/TheSecret.txt').toString();

