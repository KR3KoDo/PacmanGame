//const commandName = "msg:w"
//const spawn = require('child_process').spawn
//spawn('demo.py', commandName)


const tmi = require('tmi.js');
var starttime =0;
var remain =0;
// Define configuration options
const opts = {
  identity: {
    username: 'yyren7',
    password: 'oauth:bwiro2gj1fbzowi9k3demds5kevirn'
  },
  channels: [
    'yyren7'
  ]
};

// Create a client with our options

const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
const exec = require('child_process').exec
const py = exec('python demo.py'+' '+commandName+' '+ check(), {
  env: { PATH: 'C:\\Users\\yyren\\anaconda3\\envs\\gpu' },
  shell: 'C:\\Windows\\System32\\cmd.exe'},function(error,stdout,stderr){
    if(error) {
        console.info('stderr : '+stderr);
    }
    console.log('exec: ' + stdout);
    client.say(target, stdout);
})

}
function check(){
if(process.uptime()>=starttime+10)
{
starttime=process.uptime();
return 0;
}
else{
remain =Math.trunc(10-process.uptime()+starttime);
return remain;}
}


// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
