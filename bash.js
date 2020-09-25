const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
const date = require('./date');

const done = (output) => {
  process.stdout.write(output);
}

process.stdout.write('prompt >');

process.stdin.on('data', (data ) =>{
  const cmd = data.toString().trim();
  if(cmd == 'pwd'){
    pwd(done);
  } else
  if (cmd=='ls'){
    ls(done);
  } else if (cmd.split(' ')[0] == 'cat'){
    cat(done, cmd.split(' ')[1]);
  }
    else if (cmd.split(' ')[0]=='curl'){
      curl(done, cmd.split(' ')[1])
    }
    else if (cmd=='date'){
      date(done);
    }
        
  process.stdout.write('\nprompt > ');
} );

