const express = require('express');


const app = express();

app.get('/', (req, res) => {    res.json({
        status: "Its alive",
    })
})

app.listen(
    3000, 
    () => console.log(`Example app listening at http://localhost:${3000}`)
)