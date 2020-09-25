const pwd = require('./pwd');
const ls = require('./ls');


console.log(typeof process.execPath);

process.stdout.write('prompt >');

process.stdin.on('data', (data ) =>{
  const cmd = data.toString().trim();
  if(cmd == 'pwd'){
    pwd();
  } else 
  if (cmd=='ls'){
    ls();
  }

  //  pwd()</;
  process.stdout.write('\nprompt > ');
} );



