var PouchDB = require('pouchDB');

var timeEntriesDB= new PouchDB('timeEntry');
var projectsDB = new PouchDB('projectsDB');


export default{
  timeEntriesDB,
  projectsDB
}
