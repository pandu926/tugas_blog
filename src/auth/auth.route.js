const express = require("express");
const authRoute = express.Router();
const service = require("./auth.service");
const bcrypt = require("bcrypt");

authRoute.post("/auth/login", async(req, res) => {
    const { username, password } = await req.body;
    const userData = await service.dataUser(username);
    if (!userData) {
        return res.send("data tidak ada");
    }
    const isPassword = await bcrypt.compare(password, userData.password);
    if (isPassword) {
        return res.send("login sukses");
    } else {
        return res.send("password salah");
    }

})

module.exports = authRoute;