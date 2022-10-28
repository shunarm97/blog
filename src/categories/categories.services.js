const categoriesControllers = require('./categories.controllers')

const getAllCategories = (req, res) => {
    categoriesControllers.getAllCategories()
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const getCategoriesById = (req, res) => {
    const id = req.params.id
    categoriesControllers.getCategoriesById(id)
    .then((response) => {
        if(response){
            res.status(200).json(response)
        } else {
            res.status(400).json({message: "invalid ID"})
        }
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}


const createCategory = (req, res) => {
    const {name} = req.body

    if(name) {
        categoriesControllers.createCategory(name)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        } )

    } else {
        res.status(400).json({message: 'missing data'})
    }
}

// const createCategory = (req, res) => {
//     const {name} = req.body
//         categoriesControllers.createCategory(name)
//         .then((response) => {
//             res.status(201).json(response)
//         })
//         .catch((err) => {
//             res.status(400).json({message: err.message})
//         } )
// }


module.exports = {
    getAllCategories,
    getCategoriesById,
    createCategory
}