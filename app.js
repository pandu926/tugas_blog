const express = require("express");
const app = express();
const port = 8000;
const userRoute = require("./src/user/user.route");
const articleRoute = require("./src/article/article.route");
const authRoute = require("./src/auth/auth.route");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("ini halaman pertama");
})
app.use(express.json());
app.use(userRoute);
app.use(articleRoute);
app.use(authRoute);


app.listen(port, () => {
    console.log("terhubung ke port", port);
})