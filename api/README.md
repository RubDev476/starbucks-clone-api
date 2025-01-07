# Api Clon de Starbucks

Este proyecto es un clon de la API de Starbucks, con el fin de practicar el uso de React, TypeScript, Vite, Express y MongoDB.

## Instalación

Para instalar las dependencias del proyecto, se debe ejecutar el siguiente comando:

```bash
npm install
```

## Uso

Primero se debe crear un archivo .env (Variables de entorno) en la raíz del proyecto de la api, con las siguientes variables:

```
PORT=4000
DB_USER=<usuario>
DB_PASS=<contraseña>
DB_NAME=<nombre de la base de datos> (default starbucks_api)
DB_HOST=<host o cluster>
DB_PORT=<puerto> (default 27017)
```

Nota: Para el uso del script y comando que genera la Base de Datos, si se tiene protegida la conexión con mongodb hay que ajustar la url del script.

```typescript
// api/scripts/initDb.ts
async function setupDatabase() {
  // linea 85, El valor de DB_HOST, DB_NAME y DB_PORT lo toma del archivo .env
  const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  console.log('uri:', uri);
// Por ejemplo: mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}
// o
// Por ejemplo: mongodb://user:contraseña@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}
```

Si se desea volver a ejecutar el script para crear la base de datos, se debe eliminar la base de datos creada anteriormente ajustando la bandera del script.
    
```typescript
// api/scripts/initDb.ts

// linea 94
await clearDatabase(false); // Cambia a `true` para reiniciar la base de datos, esto elimina la base de datos actual de la api
```

Para crear la Base de Datos, se debe ejecutar el siguiente comando:

```bash
npm run init-db
```

Para iniciar el servidor de desarrollo, se debe ejecutar el siguiente comando:

```bash
npm run dev
```

Para compilar el proyecto, se debe ejecutar el siguiente comando:

```bash
npm run build
```

Para ejecutar el servidor de producción, se debe ejecutar el siguiente comando:

```bash
npm run server
```

## Documentación de los endpoints

Para acceder a la documentación de los endpoints, se debe acceder a la siguiente URL:

```
http://localhost:4000/api/docs  (Desarrollo)
```

## Estructura de carpetas

- **jsons**: Contiene los archivos de datos de la api.
- **scripts**: Contiene scripts para la creación de la base de datos.
- **src**: Contiene el código fuente del proyecto.
  - **controllers**: Contiene los controladores de la api.
  - **models**: Contiene los modelos de la api.
  - **routes**: Contiene las rutas de la api.
  - **settings**: Contiene la configuración de la api.
    - **db**: Contiene las configuraciones de las bases de datos.
      - **mongoDb**: Contiene la configuración de mongoDB.
  - **utils**: Contiene utilidades para el proyecto.
  - **server.ts**: Archivo principal de la api.
  - **swagger.ts**: Archivo de configuración de Swagger (Documentación de los endpoints).
- **.env**: Archivo de configuración de variables de entorno.
- **datav2.json**: Archivo de datos de la api para su importación a mongoDB (datos starbucks México).
- **tsconfig.json**: Archivo de configuración de TypeScript.
- **package.json**: Archivo de configuración de npm.
- **vercel.json**: Archivo de configuración para vercel.
- **dist**: Carpeta de salida de la compilación del proyecto (esta se genera al transpilar).

## Tecnologías

- **Node.js**: Entorno de ejecución para JavaScript v22.12.0.
- **Express**: Framework de Node.js v4.21.2.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: Librería de modelado de objetos MongoDB v8.9.1.
- **TypeScript**: Superset de JavaScript v5.7.2.

## Librerías

- **Express**: Framework de Node.js v4.21.2.
- **Mongoose**: Librería de modelado de objetos MongoDB v8.9.1.
- **Swagger-jsdoc**: Generador de documentación de Swagger v6.2.8.
- **Swagger-ui-express**: Middleware de Swagger para Express v5.0.1.
- **Dotenv**: Módulo que carga variables de entorno desde un archivo .env a process.env v16.4.7.

## Notas de desarrollo

El primer endpoint /api/menu se encuentra finalizado con la respuesta que se espera, solo faltan las direcciones de las imagenes.


## Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor, abra un problema primero para discutir qué le gustaría cambiar.

Asegúrese de actualizar las pruebas según corresponda.
