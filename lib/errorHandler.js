var figlet = require('figlet');
var importer = require('./importer');

module.exports= function(req, res, next){

    var th401Art=
    `
    <pre>
    ${ figlet.textSync('401',importer.getFont()) }
    __________
    How dare you knock on these doors?
    `;

    return res.status(401).send(th401Art)
    
}
