// To implement this command, we'll need to accept not only the name of the command, but also the name of the file that the command will act upon.
const fs=require('fs');

// Figure out, using fs, how to implement this command for one file argument. The hints below will help, but try to figure it out on your own first.


//1. split cmd string
//2. cat
//3.  get file contents using fs

module.exports = (done, name) => {
  //get file contents and print to screen
  fs.readFile(`./${name}`, 'utf8', (err, data) => {
    if (err) throw err;
    done(data);
  });

}
