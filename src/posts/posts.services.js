const postControllers = require('./posts.controllers')



const getAllPosts = (req, res) => {
    
    //? localhost:9000/api/v1/posts?offset=0&limit=20
    const {offset, limit} = req.query
    //? offset : donde inicia 
    //? limit: cantidad maxima a mostrar

    postControllers.getAllPosts(offset, limit)
    .then((response) => {
        res.status(200).json({
            offset, 
            limit,
            result: response
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