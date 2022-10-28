const uuid = require('uuid')
const Categories = require('../models/categories.models')

const posts  = require('../models/post.models')
const Users = require('../models/users.models')


const getAllPosts = async() => {
    const response = await posts.findAll({
        include : [
            {
                model: Users
            },
            {
                model: Categories,
                attributes: {
                    exclude: ['id']
                }
            }
        ],
        attributes: {
            exclude: ['createdAt','updatedAt', 'categoryId','userId']
            
        }
    })
    return response
}


const getPostsById = async(id) => {
    const response = await posts.findOne({
        where: {
            id : id
        }
    })
    return response
}

const createPost =  async(data) => {
    const response = await posts.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        createdBy: data.userId,
        categoryId: data.categoryId
    })
    return response
}

module.exports = {
    getAllPosts,
    getPostsById,
    createPost
}