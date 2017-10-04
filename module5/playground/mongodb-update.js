const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect')
    }
     
    console.log('Connected to MongoDB server');

    // findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: newObjectID('')
    }, {
        $set: {
            completed: true
        },
    },{            
        returnOriginal: false
    });

    //  db.close();
});