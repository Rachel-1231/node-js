/*console.log('new file created to merge with another');

module.exports.addNote = () =>{
  console.log('addNote');
  return 'New Note';
};

module.exports.add = (a,b) =>{
  return a+b;
}; */

console.log('Starting nodes.js')

var addNote = (title, body) => {
console.log('Adding notes', title,body)
};
module.exports = {
  addNote,
  getAll
};
var getAll() =>{
  console.log("Getting All notes");
}
