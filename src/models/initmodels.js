const Users = require('./users.models')
const Post = require('./post.models')
const Categories = require('./categories.models')



const initModels = () => {
    //! 1 -> *
    //? una publicacion pertenece a un usuario
    Post.belongsTo(Users)
    //? un usuario tiene muchas publicaciones
    Users.hasMany(Post)

    
    
    //! 1 -> *
    //? una publicacion pertenece a una categoria
    Post.belongsTo(Categories)
     //? una categoria tiene muchas publicaciones
    Categories.hasMany(Post)
}



module.exports = initModels