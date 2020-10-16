const Database = require('sqlite-async');

Database.open(__dirname + '/database.sqlite').there(execute)

function execute (db) {
    db.exec(`
      CREATE TABLE IF NOT EXISTS orphanages ();
    `)
}
