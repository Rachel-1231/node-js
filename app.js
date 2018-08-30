const fs= require('fs');
const os = require('os');
const notes = require('./notes'); //IMPORTING NODES FILE
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

var command= process.argv[2];
console.log('command', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add'){
  var note = notes.addNote( argv.title, argv.body);
  if (note){
    console.log('notes created');
    notes.logNote(note);
  } else{
    console.log('Note title taken');
  };
}else if (command === "list"){
  notes.getAll();
} else if (command === 'read'){
  notes.readAll(argv.title, argv.body);
} else if (command === 'remove'){
  notes.removeAll(argv.title);
}
else{
  console.log("I do not recognize the command");
};
