# BLOG API  

- Front : 
    - Obtener todas las publicaciones
    - Obtener una en especifico
    - Obtener todas las categorias
    - Obtener todos los post de una categoria en especifico
    - Obtener todos los post que he creado
    - Obtener todoslos los post de un usuario en especifico
    - Podemos paginar los post 
    - Acciones de CRUB sobre los post
    - Crear categorias

```json
    {
        "total": 68,
        "prev": "localhost:9000/api/v1/post?start=51&limit=60",
        "next": "localhost:9000/api/v1/post?start=61&limit=68",
        "data": [
            {
                "id": "778a0b7c-464a-477c-8f53-992b14c117cb",
                "title": "example",
                "content": "loren ipsum",
                "createdBy" : {
                    "id":"181c477bef-25b9-4c31-8a65-5cd662e04892",
                    "name": "alexander", 
                    "email": "alex123@gmail.com"
                },
                "category": {
                    "id" :"b43a1a64-0661-409c-9b5c-201584b45fc8",
                    "name": "tecnology"
                }
            }
        ]
    }
```

/api/v1

/users
        - /me
        - /me/posts
        - /me/posts/:id
        - /:id

/categories
        - /:id
        - /:id/posts


/posts
         - /:id
         


1.0.5   

0.0.5   solucion de bug

0.5.0   agregar pequeñas funcionalidades

5.0.0   agregar funcionalidades mas completas que requiere cambios grandes en la app y su funcionamiento