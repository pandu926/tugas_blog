const { post } = require("../database/models");

const getArticleAll = async(user_id) => {
    return await post.findAll({
        where: { user_id: user_id }
    });
}

const getSingleArticle = async(id) => {

    return await post.findOne({
        where: { id }
    });


}

const createPostRepo = async({ user_id, title, body, post_image }) => {
    return await post.create({
        user_id,
        title,
        body,
        post_image,
    })
}

const updatePostRepo = async({ id, title, body, post_image }) => {
    return await post.update({
        title,
        body,
        post_image,
    }, {
        where: { id },
        returning: true,
    })
}
const deletePostRepo = async(id) => {
    return await post.destroy({
        where: { id }
    })
}

const repo = {
    getArticleAll,
    createPostRepo,
    updatePostRepo,
    getSingleArticle,
    deletePostRepo
}

module.exports = repo;