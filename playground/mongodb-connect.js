const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if(err){
        return console.log('Unable to connect to database!');
    }

    let db = database.db('TodoApp');

    console.log('Connected to mongodb server');

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log(err);
    });

    database.close();
});