const express = require("express");
const auth = require("../auth/auth.controller");
const tokenVerification = require("../middleware/tokenVerification");
const userRoute = express.Router();
const con = require("./user.controller")

userRoute.post("/user/register", con.registration);
userRoute.get("/user", tokenVerification, con.fetchUser);
userRoute.post("/user/login", auth.authentication);



module.exports = userRoute;