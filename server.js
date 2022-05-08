const express = require('express');
const path = require('path');

const app = express();

app.use('/data', express.static(path.resolve('data')));
app.use('/static', express.static(path.resolve('static')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve( 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Server running...'));