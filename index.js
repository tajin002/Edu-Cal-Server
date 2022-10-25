const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());

const categories = require("./Data/education.json");


app.get('/' , (req , res)=>{
    res.send(categories);
});

app.get ("/data/:id", (req , res)=>{
    const id = req.params.id;
    const item = categories.find(item => item.id == id);  
    res.send(item)
})

app.listen(port,()=>{
    console.log(`server prot ${port}`);
})