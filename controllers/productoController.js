const Producto = require('../models/Producto');


exports.crearProducto = async (req,res) =>{
    try{

let producto;

producto = new Producto(req.body);

await producto.save ();
res.send(producto);

    }catch(error){
        console.log(error);
    }
}

exports.obtenerProductos = async (req,res) =>{

try{

const productos = await Producto.find();
res.json(productos);


}catch(error){
        console.log(error);
    }


}

exports.obtenerProducto = async (req,res) => {

try{
    let producto = await Producto.findById(req.params.id);
    
    if(!producto){
        res.status(404).json({message:'no existe el producto'})
    }
    res.json(producto);
}catch(error){
    console.log(error);
}
}

exports.eliminarProducto = async (req,res) => {

    try{
        let producto = await Producto.findById(req.params.id);
        
        if(!producto){
            res.status(404).json({message:'no existe el producto'})
        }
await producto.findOneAndRemove({_id: req.params.id});
        res.json( {msg: 'producto eliminado'});
    }catch(error){
        console.log(error);
    }
    }
    