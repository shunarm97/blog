const postControllers = require('./posts.controllers')
const {host} = require('../config')


const getAllPosts = (req, res) => {
    
    //? localhost:9000/api/v1/posts?offset=0&limit=20
    const offset = Number(req.query.offset) || 0
    const limit = Number(req.query.limit) || 10   
    //? offset : donde inicia 
    //? limit: cantidad maxima a mostrar


    const ulrBase = `${host}/api/v1/posts`

    
    postControllers.getAllPosts(offset, limit)
    .then((response) => {
        const nextPage = response.count - offset >= limit ? `${ulrBase}?offset=${offset + limit}&limit=${limit}` : null
        const prevPage = offset - limit >= 0 ? `${ulrBase}?offset=${offset - limit}&limit=${limit}` : null

        res.status(200).json({
           next: nextPage,
            prev: prevPage,
            items: response.count,
            offset,  
            limit,
            result: response.rows
        })
    })
    .catch((err) => { 
        res.status(400).json({message: err.message})
    })
}


const createPost = (req, res) => {
    const userId = req.user.id
    const {title, content, categoryId} = req.body

    if(title && content && categoryId) {
        postControllers.createPost({title, content, categoryId, userId})
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((err) => [
            res.status(400).json({message: err.message})
        ])
    } else {
        res.status(400).json({message:'missing data', field : {
            title: 'string',
            content: 'string',
            categoryId: 'uuid'
        }
    })
    }
}

const getCategoriesById = (req, res) => {
    const categoryId = req.params.id
     postControllers.getPostByCategory(categoryId)
     .then((response) => {
        res.status(200).json(response)
     })
     .catch((err) => {
        res.status(400).json({message: err.message})
     })
}


module.exports = {
    createPost,
    getAllPosts,
    getCategoriesById
}