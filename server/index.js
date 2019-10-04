const express = require('express')

const app = express()
const getProducts = require('./getProducts')

app.get(`/api/products`, getProducts)


app.get(`/api/products/:id`, getProducts)





const port = 2222
app.listen(port, () =>{
    console.log(`Server listening on port: ${port} `)
})