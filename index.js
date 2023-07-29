// for using import and require() in same js file we need to add this two line
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// import chalk from 'chalk';
// import { argv } from "process";

const yargs = require('yargs');

const notes = require('./notes');

// const command= process.argv[2]

yargs.version('1.1.0')

yargs.command(
    {
        command:'add',
        describe:'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            } 
        },
        handler: function(argv)
        {notes.addNotes(argv.title, argv.body)}
    }
)

yargs.command(
    {
        command:'remove',
        describe:'Remove a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv)
        {notes.removeNotes(argv.title)}
    }
)

yargs.command(
    {
        command:'read',
        describe:'read note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv)
        {notes.readNotes(argv.title)}
    }
)

yargs.command(
    {
        command:'list',
        describe:'list all notes',
        handler: function()
        {notes.listNotes()}
    }
)

yargs.parse()
// we have to give either yargs.parse() or console.log(yargs.argv) to execute the program 
// console.log(yargs.argv)