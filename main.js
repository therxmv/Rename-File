let fs = require('fs');

const files = fs.readdirSync('./toRename/'); // all files names in folder

files.forEach(elem => {
    const name = Math.floor(Math.random() * (9999999999 - 999999999)) + 999999999, // new file name
        ext = (elem.charAt(elem.length - 2).toLowerCase() === 'p') ? 'jpg' : 'png'; // extension

    fs.rename(`./toRename/${elem}`, `./toRename/W${name}.${ext}`, 
    (err) => {
        if ( err ) console.log('ERROR: ' + err);
    });
});