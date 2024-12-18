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
DB_NAME=<nombre de la base de datos>
DB_HOST=<host o cluster>
DB_PORT=<puerto> (default 27017)
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

- **src**: Contiene el código fuente del proyecto.
  - **controllers**: Contiene los controladores de la api.
  - **routes**: Contiene las rutas de la api.
  - **utils**: Contiene utilidades para el proyecto.
- **.env**: Archivo de configuración de variables de entorno.
- **datav2.json**: Archivo de datos de la api para su importación a mongoDB.
- **datav2_with_ids.json**: Archivo de datos de la api con ids para su importación a mongoDB.
- **swagger.ts**: Archivo de configuración de Swagger (Documentación de los endpoints).
- **tsconfig.json**: Archivo de configuración de TypeScript.
- **package.json**: Archivo de configuración de npm.
- **vercel.json**: Archivo de configuración para vercel.
- **dist**: Carpeta de salida de la compilación del proyecto (esta se genera al transpilar).

## Tecnologías

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework de Node.js.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: Librería de modelado de objetos MongoDB.
- **TypeScript**: Superset de JavaScript.


## Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor, abra un problema primero para discutir qué le gustaría cambiar.

Asegúrese de actualizar las pruebas según corresponda.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
