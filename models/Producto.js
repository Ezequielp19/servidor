const mongoose = require('mongoose');

const ProductoSchema= mongoose.Schema({
nombre:{
    type: "string",
},
categoria:{
    type: "string",
},
ubicacion:{
    type: "string",
},
precio:{
    type: Number,
},

fechaPedido: {
    type:Date,
    default: Date.now()
}

})

module.exports = mongoose.model('Producto',ProductoSchema)