const fs = require('fs');
const http = require('http');
const { title } = require('process');

const newNote = function(title, body){
    const notes = uploadNotes();
    notes.push({title, body});
    fs.writeFileSync(title,body);
    fs.writeFileSync('notepad.json', JSON.stringify(notes));
}

// const readNote = function(title){
//     const notes = uploadNotes();
//     fs.readFile(title,'utf8',(err,body)=>{
//         if(err){
//           console.log('Error reading file...');
//           return;
//         }
//         else console.log(body);
//     });
// }

// const editNote = function(title, new_text){
//     const notes = uploadNotes();
//     fs.appendFile(title, new_text, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// }

// const openNote = function(title,file){
//     const notes = uploadNotes();
//     fs.open(title, 'w', function (err,file) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// }

// const deleteNote = function(title){
//     const notes = uploadNotes();
//     const remaining = notes.filter(function(note){
//         return note.title !== title;
//     });
//     fs.unlink(title, function (err) {
//         if (err) throw err;
//         console.log('File deleted!');
//       });
//     fs.writeFileSync('notepad.json', JSON.stringify(remaining));
// }

// const renameNote = function(title, new_title){
//     const notes = uploadNotes();
//     fs.rename(title, new_title, function (err) {
//         if (err) throw err;
//         console.log('File Renamed!');
//     });
// }

// const allNotes = () => {
//     const notes = uploadNotes();
//     notes.forEach(note => console.log(note.title));
// }

// const findNote = title => {
//     const notes = uploadNotes();
//     const note = notes.find(note => note.title === title)
//     debugger;
//     if(note){
//         console.log('Title ->>>', note.title);
//         console.log('Body ->>>', note.body);
//     }else{
//         console.log('Note not found');
//     }
// }

// const uploadNotes = function(){
//     try{
//         const dataBuffer = fs.readFileSync('notepad.json');
//         const dataJSON = dataBuffer.toString();
//         return JSON.parse(dataJSON);
//     }catch(e){
//         return [];
//     }
// }

module.exports = { newNote, deleteNote, renameNote, readNote, editNote, openNote, allNotes, findNote};