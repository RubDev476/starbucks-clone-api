# Starbucks Clone
Main technologies:

- TypeScript
- Sass
- React
- Vite
- Express
- MongoDB
- Cloudinary
- Swagger
- Vercel

Frontend libraries:

- [CSS Loaders](https://css-loaders.com/spinner/)

## Collaborators:

- [RubDev666](https://github.com/RubDev666) (Frontend)
- [alexisunam](https://github.com/alexisunam) (API)

## Documentation
- [API](#api-docs)
- [Frontend](#frontend-docs)

## Project features

- API with MongoDB, Cloudinary and Express. Documented with Swagger
- Dynamic routes (React router DOM)
- Responsive Design

Inspired design from [Starbucks](https://www.starbucks.com). official web site.

# API Docs

This project is a clone of the Starbucks API, aimed at practicing the use of React, TypeScript, Vite, Express, and MongoDB.

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Usage

First, create a .env file (Environment Variables) at the root of the API project with the following variables:

```
PORT=4000
DB_USER=<user>
DB_PASS=<password>
DB_NAME=<database name> (default starbucks_api)
DB_HOST=<host or cluster>
DB_PORT=<port> (default 27017)
```

Note: For the use of the script and command that generates the Database, if the connection to MongoDB is protected, the script URL must be adjusted.

```typescript
// api/scripts/initDb.ts
async function setupDatabase() {
  // line 85, The value of DB_HOST, DB_NAME, and DB_PORT is taken from the .env file
  const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  console.log('uri:', uri);
// For example: mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}
// or
// For example: mongodb://user:password@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}
}
```

If you want to run the script again to create the database, you must delete the previously created database by adjusting the script flag.

```typescript
// api/scripts/initDb.ts

// line 94
await clearDatabase(false); // Change to `true` to reset the database, this deletes the current API database
```

To create the Database, run the following command:

```bash
npm run init-db
```

To start the development server, run the following command:

```bash
npm run dev
```

To build the project, run the following command:

```bash
npm run build
```

To run the production server, run the following command:

```bash
npm run server
```

## API Endpoints Documentation

To access the API endpoints documentation, go to the following URL:

```
http://localhost:4000/api/docs  (Development)
```

## Folder Structure

- **jsons**: Contains the API data files.
- **scripts**: Contains scripts for database creation.
- **src**: Contains the project source code.
  - **controllers**: Contains the API controllers.
  - **models**: Contains the API models.
  - **routes**: Contains the API routes.
  - **settings**: Contains the API configuration.
    - **db**: Contains the database configurations.
      - **mongoDb**: Contains the MongoDB configuration.
  - **utils**: Contains utilities for the project.
  - **server.ts**: Main API file.
  - **swagger.ts**: Swagger configuration file (API endpoints documentation).
- **.env**: Environment variables configuration file.
- **datav2.json**: API data file for import into MongoDB (Starbucks Mexico data).
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: npm configuration file.
- **vercel.json**: Vercel configuration file.
- **dist**: Output folder for the project build (generated upon transpilation).

## Technologies

- **Node.js**: JavaScript runtime environment v22.12.0.
- **Express**: Node.js framework v4.21.2.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling library v8.9.1.
- **TypeScript**: JavaScript superset v5.7.2.

## Libraries

- **Express**: Node.js framework v4.21.2.
- **Mongoose**: MongoDB object modeling library v8.9.1.
- **Swagger-jsdoc**: Swagger documentation generator v6.2.8.
- **Swagger-ui-express**: Swagger middleware for Express v5.0.1.
- **Dotenv**: Module that loads environment variables from a .env file into process.env v16.4.7.

## Development Notes

The first endpoint /api/menu is completed with the expected response, only the image URLs are missing.

## Contributions

Contributions are welcome. For major changes, please open an issue first to discuss what you would like to change.

Make sure to update the tests as appropriate.

# Frontend Docs

This document provides an overview of the Starbucks project, specifically the `frontend` folder.

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Project Structure

The structure of the `frontend` folder is as follows:

```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.js
│   ├── index.js
│   └── ...
├── public/
│   ├── index.html
│   └── ...
├── package.json
└── README.md
```

- **src/**: Contains the project's source code.
    - **components/**: Reusable components of the application.
    - **pages/**: Main pages of the application.
    - **styles/**: CSS style files.
    - **App.js**: Main component of the application.
    - **index.js**: Entry point of the application.
- **public/**: Public files that do not go through the build process.
    - **index.html**: Main HTML file.
- **package.json**: npm configuration file.

## Usage

First, create a .env file (Environment Variables) at the root of the Frontend project with the following variable:

```
//replace it with the url you have
VITE_API_URL = http://localhost:4000 
```

To start the application in development mode, run:

```bash
npm run dev
```

This will open the application in your default browser at `http://localhost:3000`.

To build the application, run:

```bash
npm run build
```

This will create a folder named **dist** in the root of the **frontend** folder with all the files ready for production.

## Contribution

If you want to contribute to this project, **fork** the repository and then create a **pull request**.
