const fs= require('fs');
const os = require('os');
const nodes = require('./nodes');
const _ = require('lodash');

//console.log(nodes);

//console.log('Result:',nodes.add(9, -3));
/*
console.log(_.isString(true));
console.log(_.isString('Verint')); */

//var user = os.userInfo();
/*console.log(user);

fs.appendFile('greetings.txt', `Hello ${user.username}! `, (err) => {
 if (err) throw err;
 console.log('The "data to append" was appended to file!');
});*/

var filteredArray = _.uniq([1,2,3,4,5,3,3,3,4,4,4, 'Rachel', 2,2,2,3,3,'Rachel']);
console.log(filteredArray);
