const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// use middleware
app.use(cors())
app.use(express.json());




// crate get api root element 

app.get('/', (req, res) => {
    res.send('Simple e-commerce is running')
});

app.listen(port, () => {
    console.log('The server is running', port);
});