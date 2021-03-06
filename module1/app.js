const yargs = require('yargs');
const notes = require('./notes');

const noteTitle = {
      describe: 'Title of note',
      demand: true,
      alias: 't'
};

const noteBody = {
      description: 'Body of the note',
      demmand: true,
      alias: 'b'
};

const argv = yargs
      .command('add', 'Add a new note', {
            title: noteTitle,
            body: noteBody
      })
      .command('list', 'List all notes')
      .command('read', 'Read a note', {
            title: noteTitle
      })
      .command('remove', 'Remove a note', {
            title: noteTitle
      })
      .help()
      .argv;

let command = argv._[0];

if (command == 'add') {
      let note = notes.addNote(argv.title, argv.body);
      note ? notes.logNote(note) : console.log("Note not found");
} else if (command === 'list') {
      let allNotes = notes.getAll();
      console.log(`Printing ${allNotes.length} notes(s).`);
      allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
      let note = notes.getNote(argv.title);
      note ? notes.logNote(note) : console.log("Note not found");
} else if (command === 'remove') {
      let noteRemoved = notes.removeNote(argv.title);
      let message = noteRemoved ? 'Note was removed' : 'Note not found';
      console.log(message);
} else {
      console.log('Command not recognized');
}
