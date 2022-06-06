const express = require('express');

const router = express.Router();

// query params usado para filtros
// http://localhost:8000/users?name=kenny&email=k@cd.com
router.get('/', (req, res) => {
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

module.exports = router;