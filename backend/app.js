const express = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send("Hello from college community!!!")
})

app.listen(3000, () => {
    console.log("listening to port 3000");
})