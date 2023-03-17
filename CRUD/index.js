import express, { json } from "express";
import productsRouter from "./src/products/products.routes.js";
import { connectDB } from "./mongoose.js";
const app = express();

const port = 4321;

connectDB();

app.use(json());
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
