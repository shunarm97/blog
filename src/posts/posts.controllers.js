const uuid = require('uuid')
const Categories = require('../models/categories.models')
const Post = require('../models/post.models')

const posts  = require('../models/post.models')
const Users = require('../models/users.models')


const getAllPosts = async() => {
    const response = await posts.findAll({
        include : [
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'email']
                
            },
            {
                model: Categories,
                as: 'category',
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

//? Posts Categories PostsCategories
 



const getPostsById = async(id) => {
    const response = await posts.findOne({
        where: {
            id : id
        },
        include : [
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'email']
                
            },
            {
                model: Categories,
                as: 'category',
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

const createPost =  async(data) => {
    const response = await posts.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        userId: data.userId,
        categoryId: data.categoryId
    })
    return response
}

const getPostByCategory = async(categoryId) => {
    const response = await Post.findAll({
        where: {
            categoryId : categoryId
        }
    })
    return response
}


module.exports = {
    getAllPosts,
    getPostsById,
    createPost,
    getPostByCategory
}



