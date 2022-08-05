const express = require("express");
const tokenVerification = require("../middleware/tokenVerification");
const userRoute = express.Router();
const service = require("./user.service");


userRoute.post("/user/register", async(req, res) => {
    const { fullname, username, password } = req.body;
    console.log(req.body);
    const registerUser = await service.register({ fullname, username, password });
    res.json(registerUser);
});

userRoute.get("/user", tokenVerification, async(req, res) => {
    const allUser = await service.getUsersAll();
    res.json(allUser);
})



module.exports = userRoute;