const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Silvia',
        age : 24,
    }, {
        name: 'Ulisses',
        age : 23
    }]);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

module.exports.app = app;