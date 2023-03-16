API-CHAT
-

Diagrama de relaciones de la base de datos.
![Data Base](https://i.imgur.com/LOOZJKl.png)

Principales funciones:
-

- Registro de usuarios (Sing in).
- Inicio de sesión (Login) por autentificación de usuarios mediante correo electrónico y contraseña.
- Creación de conversaciones entre usuarios.
- Creación y envio de mensajes entre usuarios.
- Lecctura de conversaciones.

Registro de usuarios
-
Para el registro de un usuario se hará mediante una petición

    POST-> /api/v1/users

Se recibirá del body el siguiente objeto JSON

    {
        firstName : 'String',
        lastName : 'String',
        email: 'example@example.com',
        password: 'String',
        profileImage: 'example.com/image.png',
    }

Al hacer la petición la contraseña será hasheada mediante la dependencia bcrypt.

Inicio de sesión
-
El inicio de sesión se hace con una petición 

    POST-> /api/v1/auth/login

Recibiendo el siguiente objeto:

    {
        email: 'example@example.com',
        password: 'String'
    }

Después de recibir el correo electrónico y la contraseña, se valida que el correo pertenezca a un usario y la contraseña es válida, como respuesta de esta validación se genera un token que será utilizado para hacer uso de rutas protegidas.

Rutas Protegidas
-

1._ Obtención de información sobre mi usuario

    GET -> /api/v1/users/me

2._ Editar información de mi usuario

    PATCH -> /api/v1/users/me

3._ Borrar mi usuario

    DELETE -> /api/v1/users/me

4._ Creación de conversación entre mi usario y otro usuario

    POST -> /api/v1/conversations

5._ Obtención de todas mis conversaciones

    GET -> /api/v1/users/me

6._ Creación y envío de mensaje en una conversación






























