# Starbucks Clone (Postgresql version)
Main technologies:

- TypeScript
- TypeORM
- Sass
- React
- Vite
- Express
- Postgresql (with Supabase)
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

- API with Postgresql(with Supabase), Cloudinary and Express. Documented with Swagger
- Dynamic routes (React router DOM)
- Responsive Design

Inspired design from [Starbucks](https://www.starbucks.com). official web site.

# API Docs

This project is a clone of the Starbucks API, aimed at practicing the use of React, TypeScript, Vite, Express, and Postgresql.

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Usage

First, create a .env file (Environment Variables) at the root of the API project with the following variables:

```
PG_DB_USERNAME=<user>
PG_DB_PASSWORD=<password>
PG_DB_NAMEDB=<database name>
PG_DB_HOST=<host or cluster>
PG_DB_PORT=<port> (default 27017)
```

Before starting: 
- These credentials are provided by supabase, but feel free to use any SQL database you want.
- By default the project is configured for postgresql, if it's a different database don't forget to modify the "db.ts" file.
- For the first run, enable the "synchronize: true". This allows tables to be created automatically in the database.
```bash
// for more information: https://typeorm.io/data-source-options
export const appDataSource = new DataSource({
    type: "postgres", 
    url: `postgresql://${process.env.PG_DB_USERNAME}:${process.env.PG_DB_PASSWORD}@${process.env.PG_DB_HOST}:${process.env.PG_DB_PORT}/${process.env.PG_DB_NAMEDB}`,
    entities: [__dirname + '/../entities/*.{js,ts}'],
    synchronize: true, //only on the first run
})
```

To start the development server, run the following command:

```bash
npm run dev
```

- Then in your database use the csv files in the "data" folder to import all the data into the tables.
- If there are any problems with the names or titles (some columns include special characters), you can use the "scripts.sql" file in the "data" folder to automatically update the data in your SQL editor.
- Also, some products contain "," in the "name" column, which can be a problem when importing data, in that case, in the same "scripts.sql" file, there is a script to add the rest of the products without problems.

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

- **data**: Contains the API data files (.csv) and scripts (.sql).
- **src**: Contains the project source code.
  - **config**: Contains the DB, TypeORM and Swagger configuration.
  - **entities**: Contains the API entities for TypeORM.
  - **index.ts**: Main API file.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: npm configuration file.

## Technologies/Libraries

- **Node.js**: JavaScript runtime environment.
- **Express**: Node.js framework.
- **TypeORM**: ORM for Node.
- **Postgresql**: with Supabase.
- **TypeScript**: JavaScript superset.
- **Swagger-jsdoc**: Swagger documentation generator.
- **Swagger-ui-express**: Swagger middleware for Express.
- **Dotenv**: Module that loads environment variables from a .env file into process.env.

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
