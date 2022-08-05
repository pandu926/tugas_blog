const service = require("./article.service");

const getArticleAll = async(req, res) => {
    const user_id = req.auth.id;
    const articleAll = await service.getArticle(user_id);
    res.json(articleAll);
}
const getArticleSingle = async(req, res) => {
    const { id } = req.params;
    const user_id = req.auth.id;
    const getpost = await service.getSingle(id, user_id);
    res.json(getpost);
}

const upadateArticle = async(req, res) => {
    const { id } = req.params;
    const user_id = req.auth.id;
    const { title, body, post_image } = req.body;
    const post = await service.updatePost({ id, user_id, title, body, post_image });
    res.json(post);
};

const createArticle = async(req, res) => {
    const { title, body, post_image } = req.body;
    const user_id = req.auth.id;
    const post = await service.addPost({ user_id, title, body, post_image });
    res.json(post);
};
const deleteArticle = async(req, res) => {
    const { id } = req.params;
    const user_id = req.auth.id;
    const post = await service.deletePost({ id, user_id });
    res.status(200).send(post);
}
const con = {
    getArticleSingle,
    getArticleAll,
    upadateArticle,
    createArticle,
    deleteArticle
}

module.exports = con;