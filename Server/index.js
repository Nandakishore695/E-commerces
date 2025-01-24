const express = require("express");

const app = express();
app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 30001;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});