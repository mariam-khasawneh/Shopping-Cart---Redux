const cookieParser = require("cookie-parser");
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./Routes/authRoutes");
const productRoutes = require("./Routes/productRoutes");

const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
