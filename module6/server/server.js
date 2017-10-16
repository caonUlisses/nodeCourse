const path    = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(8080, () => {
    console.log('We are live on port 8080');
});
