const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
