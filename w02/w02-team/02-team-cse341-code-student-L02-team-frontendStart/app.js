const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8080;
app.use('/', require('./routes')); 
app.use(cors()); 
app.listen(port);
console.log(`- Web Server is listening at port ${port} ☺`);