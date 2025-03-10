import express from "express";
import categoiresRoutes from "./routes/categoriesRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to server!");
});

app.use("/categories", categoiresRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
export default app;
