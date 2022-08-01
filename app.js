const express = require("express");
const app = express();
const port = 8000;
const userRoute = require("./src/user/user.route");
app.get("/", (req, res) => {
    res.send("ini halaman pertama");
})
app.use(express.json());
app.use(userRoute);


app.listen(port, () => {
    console.log("terhubung ke port", port);
})