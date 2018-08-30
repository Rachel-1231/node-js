/*console.log('new file created to merge with another');

module.exports.addNote = () =>{
  console.log('addNote');
  return 'New Note';
};

module.exports.add = (a,b) =>{
  return a+b;
}; */

console.log('Starting nodes.js');

var addNote = (title, body) => {
console.log('Adding notes', title,body)
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
