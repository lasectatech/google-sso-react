# google-sso-react

En este tutorial vamos a implementar el login con la cuenta de google en un proyecto realizado con react. Para eso vamos a:
- Configurar la verificacion de identidad y generacion del token en GCP.
- Implementar la libreria de login de google en el proyecto de react.
- Implmementar la libreria de login de google en el backend y validacion del token.

## GCP

1. Crear un proyecto en GCP
2. crear un id de cliente para oauth
3. crear un .env en el proyecto y almacenar en el el client id de google


## Frontend:

1. Crear app en react
2. Instalar libreria react-google-login
3. Editar App.js
4. Definir un hook para manejar la data del login
5. Chequear la data del login y en base a eso mostrar el contenido
6. Implementar login, logout y falla


## Backend

1. Crear el server con express
2. Instalar librerias: npm install dotenv react-google-login
3. Configurar dotenv
4. crear cliente Oauth2Client
5. Definir endpoint de POST de login
6. Definir endpoint de GET de secreto
7. Crear middleware de validacion de token
8. Aplicar el middleware al endpoint de secreto
