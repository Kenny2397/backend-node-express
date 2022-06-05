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

app.listen(8000, () => {
    console.log('Server is running at port 8000');
});