const router = require('express').Router()


const categoryServices = require('./categories.services')
const {getCategoriesById} = require('../posts/posts.services')

router.route('/')
        .get(categoryServices.getAllCategories)
        .post(categoryServices.createCategory)

router.get('/:id',categoryServices.getCategoriesById)

router.get('/:id/posts', getCategoriesById)
module.exports = router