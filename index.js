const express = require('express');
const routerApi = require('./routes');

const app = express();

// middleware json
app.use(express.json());

routerApi(app);





app.listen(8000, () => {
    console.log('Server is running at port 8000');
});