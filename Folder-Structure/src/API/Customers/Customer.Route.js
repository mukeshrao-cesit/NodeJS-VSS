import { Router } from "express";
import { getAllCustomers } from "./Customer.Controller.js";

const customerRouter = Router();

customerRouter.get("/", getAllCustomers);
customerRouter.get("/mukesh", getAllCustomers);

export default customerRouter;
