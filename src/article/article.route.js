const con = require("./article.controller");
const express = require("express");
const tokenVerification = require("../middleware/tokenVerification");
const articleRoute = express.Router();

articleRoute.get("/post", tokenVerification, con.getArticleAll);
articleRoute.get("/post/:id", tokenVerification, con.getArticleSingle);
articleRoute.post("/post/create", tokenVerification, con.createArticle);
articleRoute.put("/post/update/:id", tokenVerification, con.upadateArticle);
articleRoute.delete("/post/delete/:id", tokenVerification, con.deleteArticle);

module.exports = articleRoute;