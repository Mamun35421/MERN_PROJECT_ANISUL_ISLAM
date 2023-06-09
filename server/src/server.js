const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('welcome to the server')
});
app.get('/products', (req,res)=>{
    res.status(200).send({
        message: 'api is working fine very',
    });
});



app.listen(3001, ()=>{
    console.log(`server run sucessfully run at http://localhost:3001`);
});