import { MongoClient } from 'mongodb'

// const MongoClient = require('mongodb').MongoClient

const DB_NAME = 'my-database'

// const url = "mongodb://localhost:27017/mydb"

export const db = {
    _dbClient: null,
    connect: async function(url) {
        const client = await MongoClient.connect(url, {
            maxPoolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        this._dbClient = client
    },
    getConnection: function(){
        if (!this.dbClient) {
            console.log('You need to call the connect function first!')
            process.exit(1)
        }

        return this.dbClient.db(DB_NAME)
    }
}

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   });