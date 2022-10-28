
const Categories = require('../models/categories.models')

const getAllCategories =  async () => {
    const response =  await Categories.findAll()
    return response
}

const getCategoriesById = async (id) => {
    const response = await Categories.findOne({
        where : {
            id : id
        }
    })
    return response
}

const createCategory = async (name) => {
    const newCategory = Categories.create({name})
    return newCategory
}


module.exports = {
    getAllCategories,
    getCategoriesById,
    createCategory
}