import express from "express"
import cors from "cors"
import ProductJson from "./products.json" assert{ type: 'json'};

const port = 4000
const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello I am live...")
})

app.get("/api/products", (req, res) => {
  res.send(ProductJson)
})

app.listen(port, () => {
  console.log("Listening on port", port)
})
