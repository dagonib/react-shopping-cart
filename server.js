const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

// Inicializar mongo database
mongoose.connect("mongodb://localhost/react-shopping-cart-db",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Definir el modelo
const Product = mongoose.model(
    "products", 
    new mongoose.Schema({
        _id : { type: String, default: shortid.generate },
        title : String,
        description : String,
        image : String,
        price : Number,
        availableSizes : [String],
    })
);

// Definir end point. Obtener lista de productos.
app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

// Crear producto dentro de la base de datos.
app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

// Borrar producto.
app.delete("/api/products/:id", async(req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

// Escuchar el puerto y lanzar el servidor
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server at http://localhost:5000"));