//const exec = require('child_process').exec
// console.log("1")
//var arg1 = 'w'
//const py = exec('python demo.py'+' '+arg1, {
//  env: { PATH: 'C:\\Users\\yyren\\anaconda3\\envs\\gpu' },
//  shell: 'C:\\Windows\\System32\\cmd.exe'
//})
// console.log("2")





//const commandName = "msg:w"
//const spawn = require('child_process').spawn
//spawn('demo.py', commandName)


const tmi = require('tmi.js');

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
// console.log("1")
const py = exec('python demo.py'+' '+commandName, {
  env: { PATH: 'C:\\Users\\yyren\\anaconda3\\envs\\gpu' },
  shell: 'C:\\Windows\\System32\\cmd.exe'
})
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
