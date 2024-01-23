const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the Backend!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
