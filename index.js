const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();

const port = process.env.PORT || 4000;

mongoose.connect(process.env.DB_MONGO)
.then(()=>console.log('Connect'))
.catch((error)=>console.log('Error: ' + error))

app.use(cors())


app.use(express.json()); //para recibir json

app.use('/api/productos', require('./routes/producto'));





app.listen(port, ()=>
console.log('funcionando en el puerto', port));

