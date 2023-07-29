const fs=require("fs")

// bugs: 
// check how to do import and require() in same file
// then import chalk


function loadNotes()
{
try
{
const dataJSON=fs.readFileSync('notes.json', 'utf-8')
const data=JSON.parse(dataJSON)
return data;
}
catch(e)
{
return [];
}
}

function saveNotes(notes)
{
const data=JSON.stringify(notes)
fs.writeFileSync('notes.json', data)
}


// addNotes() to add notes

function addNotes(title, body)
{
const notes=loadNotes()

const check=notes.find(element => element.title === title); 

if(check)
{
console.log("Already there!")
}
else
{
notes.push({
    title: title,
    body: body
})
console.log(`${title} - Note Added!`)
saveNotes(notes)
}
}


// removeNotes() to remove notes

function removeNotes(title)
{
const notes=loadNotes()
const check=notes.find(ele=>ele.title === title)
if(check)
{
const newNotes=notes.filter(ele=>ele.title!==title)

console.log(`Succesfully removed!`)

saveNotes(newNotes)
}
else
{
console.log(`The ${title} is not exist!`)
}
}


// listNotes() to list all notes

function listNotes()
{
const notes=loadNotes()
if(notes.length===0) {console.log("Empty Note"); return;}
console.log("Your Notes ->")
for(let ele of notes)
{
console.log(ele.title)
}
}


// readNotes() to read a note

function readNotes(title)
{
const notes=loadNotes()
// title is existed or not
// const check=notes.find(ele=>ele.title===title)
for(let ele of notes)
{
if(ele.title===title)
{
    console.log(ele.title)
    console.log(ele.body)
    return;
}
}
console.log("Not Found!")
}



module.exports={
    addNotes,
    removeNotes,
    listNotes,
    readNotes
}





// Notes.json
// [{"title":"A","body":"b"},{"title":"B","body":"b"}]