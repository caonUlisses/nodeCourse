// var obj = {
//     "name": "Ulisses"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Ulisses", "age": 23}';
// var person       = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

// console.log(typeof personString);
// console.log(personString);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body : 'some body'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);