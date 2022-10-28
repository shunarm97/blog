const db = require('../utils/database')

const {DataTypes, UUID} = require('sequelize')
const Users = require('./users.models')
const Categories = require('./categories.models')

const Post = db.define('post', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    }, 
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    content : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    //? llave foranea de users
    createdBy : {
        type: DataTypes.UUID ,
        allowNull: false,
        field: 'created_by',
        references: {
            key: 'id',
            model: Users
        }
    },
    categoryId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    }

})

module.exports =  Post