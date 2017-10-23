var figlet = require('figlet');
var url = require('url');
var importer = require('./importer');
var encrypt = require('./encrypt');

module.exports.cookCaptcha = (req, res) =>
{    
    var word=importer.getWord();
    var font=importer.getFont();
    var art=figlet.textSync(word,font);
    var encryptedUrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: encrypt.encrypt(word)
    });
    var finalString=`
    <pre>
    ----------------------
    ${art}
    ------------------------
    Hit ${encryptedUrl}/YourAnswer to see the secret
    `
    res.send(finalString)
}

module.exports.eatCaptcha = (req, res, next) =>{
    if(encrypt.decrypt(req.params.encrypted_word).toLowerCase() == req.params.the_word.toLowerCase())
        res.send(importer.TheSecret)
    else
    next()

}

