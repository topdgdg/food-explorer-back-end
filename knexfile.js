const path = require("path");

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, "src", "database", "database.db")
        },

        pool: {
            afterCreate: (comn, cb) => comn.run("PRAGMA foreign_keys = on", cb) 
        },
        migrations: {
            directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
        },
        useNullAsDefault: true
    },

};