console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs= require('yargs');
const notes = require('./notes.js');


const titleOptions={
  describe: 'Title of note',
  demand:true,
  alias:'t'
}
const bodyOptions={
  describe:'Text content of note',
  demand:true,
  alias:'b'
}

const argv=yargs
.command('add', 'Add a new note', {
  title:titleOptions,
  body:bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
  title:titleOptions
})
.command('remove','Remove a note',{
  title:titleOptions
})
.help()
.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title,argv.body);
  if (note) {
    console.log('Note added');
    notes.logNote(note);
  } else console.log('Duplicate note detected, no note added.');
}
else if (command === 'list') {
  var allNotes=notes.getAll();
  console.log(`Printing ${allNotes.length} notes(s).`);
  allNotes.forEach((note)=> notes.logNote(note));
}

else if (command === 'read') {
  var note=notes.getNote(argv.title);
  if (note){
    console.log('Note retrieved');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
}
else if (command === 'remove') {
    noteRemoved =notes.deleteNote(argv.title);
    var message= noteRemoved ? `Note ${argv.title} deleted`: `Note ${argv.title} not found`
    console.log(message)

}
else if (!command){
  console.log('Please enter a command. Add --help for help');
}
else {
  console.log('Command not recognized');
}
