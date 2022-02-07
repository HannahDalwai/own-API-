const express = require('express')
const app = express()

let products = [
    {   id: 1,
        name: "cashew",
        category: "nuts",
        price: 49.99,
       
    },
    {   id: 2,
        name: "chicken",
        category: "meat",
        price: 50.23,
        
    },
    {   id: 3,
        name: "Orange",
        category: "Fruit",
        price: 26,
        
    },
    {   id: 4,
        name: "sweetpotato",
        category: "Vegetables",
        price: 20.89,
       
    },
    {   id: 5,
        name: "Tomato",
        category: "Vegetables",
        price: 9,
        
    },
    {   id: 6,
        name: "honey and oats",
        category: "bread",
        price:25.89 ,
        
    },
]

function fixProductIDs(products){
    products.forEach((product, index) => {
        product.id = index + 1;
    })
}

app.get("/", (req,res) => {
    res.send(" Food Products")
})

app.get("/products", (req,res) => {
    res.send(products)
})

app.get("/products/:id", (req, res) => {
    const product = products.find((c) => c.id === parseInt(req.params.id))
    if(!product) res.status(404).send("product not found")
    res.send(product)
})

app.post("/products", (req, res) => {
    const product = {
        id: products.length + 1, 
        name: req.body.name,
        category: req.body.price,
        price: req.body.price
    };
    products.push(product);
    res.send(product);
});

app.delete("/products/:id", (req, res) => {
    products = products.filter((product) => product.id != req.params.id);
    fixProductIDs(products);
    res.send("Item deleted");
})

app.patch("/products/:id", (req, res) => {
    products.forEach((product) => {
        if(product.id == req.params.id){
            (product.name = req.params.name),
            (product.category = req.params.category),
            (product.price = req.params.price);
        }
    });
    res.send("product updated")
})

app.listen(8080)