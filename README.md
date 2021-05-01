## Available Scripts

Para instalar las dependencias del packages.json
npm install or yarn install

Para iniciar el proyecto
### `npm start`
o
### `yarn start`

Crear un archivo .env en la raíz del proyecto y agregar las siguientes variables de entorno
DB_CONNECTION="mongodb://localhost/test_sophos"
PORT="3005"

Funcionamiento:
El proyecto cuenta con dos rutas principales
Index: Para traer todas las series y películas
/type: Para traer las series o las películas de la base de datos en mongoDB

Al intentar traer la primera vez las series o películas se genera una acción de guardar en la base de datos de mongo 10 registros que se guardarán solo la primera vez, esto para que simule los datos semilla de la aplicación.

La solución se desarrollo con typescript, mongoDB, y manejando mongoose como orm, para las consultas y transacciones en la base de datos.