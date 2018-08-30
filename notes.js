/*console.log('new file created to merge with another');

module.exports.addNote = () =>{
  console.log('addNote');
  return 'New Note';
};

module.exports.add = (a,b) =>{
  return a+b;
}; */
const fs = require('fs');

console.log('Starting nodes.js');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch (e){

  }

};
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = []
  var note = {
    title,
    body
  };

var duplicateNotes = notes.filter((note)=> note.title === title);
if (duplicateNotes.length === 0){
notes.push(note);
saveNotes(note);


};
};
var getAll = () =>{
  console.log("Getting All notes");
};

var readAll = (title, body) =>{
console.log("Reading All Notes");
};

var removeAll = (title) => {
  console.log("Remove Title", title);
}
module.exports = {
  addNote,
  getAll,
  readAll,
  removeAll
};
