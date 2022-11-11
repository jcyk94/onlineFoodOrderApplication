const express = require('express');
const path = require('path');
const app = express();
//const host = '172.17.11.82';
const host = '172.17.11.83';
const port = 3333;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, host, function () {
    console.log("Live at Port", port);

});