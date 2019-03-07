console.log('Starting app.js');

const fs = require('fs');
const os = require('os');


let user= os.userInfo();

fs.appendFile('greetings.txt',`Hello ${user.username}`, (err)=> {
     if(err) throw err;
     console.log('The data was appended');
 });