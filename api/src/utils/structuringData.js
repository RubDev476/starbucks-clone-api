const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const data = require('../../datav2.json');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Funciones de transformación de productos
function setProductDrink(product, subCategoryId) {
    return {
        _id: product._id || uuidv4(),
        subCategoryId: subCategoryId,
        name: product.name,
        image: product.image,
        sizes: product.sizes,
        description: product.description
    };
}

function setProductFood(product, subCategoryId) {
    return {
        _id: product._id || uuidv4(),
        subCategoryId: subCategoryId,
        name: product.name,
        image: product.image,
        allergens: product.allergens,
        energyContent: product.energyContent
    };
}

function setProductCoffe(product, subCategoryId) {
    return {
        _id: product._id || uuidv4(),
        subCategoryId: subCategoryId,
        name: product.name,
        image: product.image,
        g: product.g,
        description: product.description,
        properties: product.properties
    };
}

async function initializeDb() {
    try {
        await client.connect();
        const db = client.db('starbucks_api');
        const collections = [
            'categories',
            'types',
            'subCategories',
            'products',
        ];

        // Crear colecciones si no existen
        for (const col of collections) {
            const collectionList = await db.listCollections({ name: col }).toArray();
            if (!collectionList.length) {
                await db.createCollection(col);
                console.log(`Collection created: ${col}`);
            } else {
                console.log(`The collection exists: ${col}`);
            }
        }

        console.log('Connected to the database');
        return db;
    } catch (error) {
        console.error('Something wrong to start the database:', error);
        process.exit(1);
    }
}

async function seedData(db) {
    try {
        const categoriesCollection = db.collection('categories');
        const typesCollection = db.collection('types');
        const subCategoriesCollection = db.collection('subCategories');
        const productsCollection = db.collection('products');

        const categories = [];
        const types = [];
        const subCategories = [];
        const products = [];

        for (const category of data.menu.categories) {
            let categoryId = category._id || uuidv4();
            categories.push({
                _id: categoryId,
                name: category.name
            });

            for (const type of category.types) {
                let typeId = type._id || uuidv4();
                types.push({
                    _id: typeId,
                    categoryId: categoryId,
                    title: type.title,
                    image: type.image
                });

                for (const subCategory of type.subCategories) {
                    let subCategoryId = subCategory._id || uuidv4();
                    subCategories.push({
                        _id: subCategoryId,
                        typeId: typeId,
                        title: subCategory.title
                    });

                    for (const product of subCategory.items) {
                        console.log(product);

                        if (product.sizes) {
                            products.push(setProductDrink(product, subCategoryId));
                        } else if (product.allergens || product.ingredients || product.energyContent) {
                            products.push(setProductFood(product, subCategoryId));
                        } else {
                            products.push(setProductCoffe(product, subCategoryId));
                        }
                    }
                }
            }
        }

        // Insertar los datos en las colecciones
        if (categories.length) await categoriesCollection.insertMany(categories);
        if (types.length) await typesCollection.insertMany(types);
        if (subCategories.length) await subCategoriesCollection.insertMany(subCategories);
        if (products.length) await productsCollection.insertMany(products);

        console.log('Data loaded successfully');
    } catch (error) {
        console.error('Something wrong to load the data:', error);
    }
}

async function main() {
    const db = await initializeDb();
    await seedData(db);
    await client.close();
}

main();

