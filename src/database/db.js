const Database = require('sqlite-async')
Database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
    console.log("i'm here")
    // console.log(db)
}