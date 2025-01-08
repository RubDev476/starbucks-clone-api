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