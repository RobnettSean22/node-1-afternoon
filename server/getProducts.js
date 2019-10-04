const products = require('../products.json')

const getProducts = (req, res, next) =>{
    const item = products.filter(val => val.price == parseInt(req.query.price))
    if(!item){
        return res.status(200).send(items)
    }
    res.status(200).send(products)
}


module.exports = getProducts;