const express = require('express');

const app = express();


app.get('/products', (req, res) => {
    res.json([
        {
            name:'Product 1',
            price:'1000'
        },
        {
            name:'Product 2',
            price:'2000'
        }
    ]);
});

app.get('/product/:id', (req, res) => {
    const { id } = req.params;

    res.json({
        id,
        name:'Product 2',
        price:'2000'
    });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params;

    res.json({
        categoryId,
        productId
    });
});   

// query params usado para filtros
// http://localhost:8000/users?name=kenny&email=k@cd.com
app.get('/users', (req, res) => {
    const { name, email } = req.query;

    if(name || email) {
        res.json({
            name,
            email
        });
    }else{
        res.send('no hay parametros query');
    }

});

app.listen(8000, () => {
    console.log('Server is running at port 8000');
});