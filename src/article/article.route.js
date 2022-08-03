const service = require("./article.service");
const express = require("express");
const articleRoute = express.Router();

articleRoute.get("/user/:userid", async(req, res) => {
    const user_id = req.params.userid;
    console.log(user_id);
    const articleAll = await service.getArticle(user_id);
    res.json(articleAll);

})


module.exports = articleRoute;