## Simple Ascii Art captcha

This project uses textual Ascii art instead of normal images with text for captcha.



## Usage
To install the dependent node_modules `npm install` 
To start the server `npm run start` 

Upon hittin http://localhost:3000/

You will see an ascii art captcha generated,with a url to unlock the secret.


```
    ----------------------
     __    _                 __            
[  |  (_)               [  |           
 | |  __  _   __  .---.  | |   _   __  
 | | [  |[ \ [  ]/ /__\\ | |  [ \ [  ] 
 | |  | | \ \/ / | \__., | |   \ '/ /  
[___][___] \__/   '.__.'[___][\_:  /   
                              \__.'    
    ------------------------
    Hit http://localhost:3000/aae07171148e/YourAnswer to see the secret
    
```

Upon hitting the url `http://localhost:3000/aae07171148e/lively` you will see the secret.

Whenever the root url is hit different word is seen with different font, with its unique url.




Project has been forked from auth0/webtask-everywhere refer their license for License information.


