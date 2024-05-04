// import packages
import express from "express"
import cors from "cors"

// import json file using asserts
import ProductJson from "./products.json" assert{ type: 'json'};

// define a port number
const port = 4000

const app = express()

// use for cors policies
app.use(cors())

// default page set 
app.get("/", (req, res) => {
  res.send("Hello I am live...")
})

// api route 
app.get("/api/products", (req, res) => {
  // use json file name in send function
  res.send(ProductJson)
})

app.listen(port, () => {
  console.log("Listening on port", port)
})
