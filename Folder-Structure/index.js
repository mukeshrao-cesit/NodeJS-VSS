import Express from "express";
import { PORT } from "./config.js";
import customerRouter from "./src/API/Customers/Customer.Route.js";

const app = Express();

app.use("/customers", customerRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
