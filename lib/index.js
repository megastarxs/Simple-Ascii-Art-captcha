var Express = require('express');
var Joi = require('joi'); // I know that this is not on sandbox. Let webpack bundle it for webtask usage.
var aciiCaptcha = require('./asii-captcha'); 
var errorHandler = require('./errorHandler'); 
 


var app = Express();

app.get('/', aciiCaptcha.cookCaptcha);
app.get('/:encrypted_word/:the_word', aciiCaptcha.eatCaptcha);


// Error handler
app.use(errorHandler);





module.exports = app;

