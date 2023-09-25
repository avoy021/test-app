const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("github actions");
})

app.listen(3000, () => console.log('Server is running at PORT 3000'))