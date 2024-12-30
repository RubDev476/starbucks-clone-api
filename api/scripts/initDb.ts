import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Section, Type, Category, Product } from '../src/models';
// @ts-ignore
import data from '../jsons/dataUsa.json';

dotenv.config();

async function clearDatabase(confirm: boolean) {
    if (confirm) {
        const db = mongoose.connection.db;
        if (!db) {
            console.error('No se pudo acceder a la base de datos.');
            throw new Error('No se pudo acceder a la base de datos.');
        }
        await db.dropDatabase();
        console.log('Base de datos eliminada.');
    } else {
        console.log('La base de datos no se eliminó.');
    }
}

async function connectToDatabase(uri: string) {
    try {
        console.log('Conectando a MongoDB... url: ', uri);
        await mongoose.connect(uri);
        console.log('Conexión a MongoDB establecida.');
    } catch (error) {
        console.error('Error conectándose a MongoDB:', error);
        process.exit(1);
    }
}

async function insertData(data: any) {
    for (const sectionData of data.menu.sections) {
        const section = new Section({
            title: sectionData.title,
            image: sectionData.image,
            types: [],
        });

        for (const typeData of sectionData.types) {
            const type = new Type({
                title: typeData.title,
                image: typeData.image,
                section: section._id,
                categories: [],
            });

            for (const categoryData of typeData.categories) {
                const category = new Category({
                    title: categoryData.title,
                    type: type._id,
                    products: [],
                });

                for (const productData of categoryData.products) {
                    const product = new Product({
                        name: productData.name,
                        image: productData.image,
                        sizeOptions: productData.sizeOptions,
                        included: productData.included,
                        description: productData.description,
                        allergens: productData.allergens,
                        ingredients: productData.ingredients,
                        category: category._id,
                    });

                    await product.save();
                    category.products.push(product._id as mongoose.Types.ObjectId);
                }

                await category.save();
                type.categories.push(category._id as mongoose.Types.ObjectId);
            }

            await type.save();
            section.types.push(type._id as mongoose.Types.ObjectId);
        }

        await section.save();
    }
}


async function setupDatabase() {
    //const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    const uri = process.env.MONGODB_URL;
    console.log('uri:', uri);
    if(!uri) return;

    try {

        console.log('uri:', uri);
        await connectToDatabase(uri);

        await mongoose.connection.asPromise();

        await clearDatabase(true); // Cambia a `true` para reiniciar la base de datos

        // Validar estructura del JSON
        if (!data || !data.menu || !data.menu.sections) {
            throw new Error('El archivo JSON no contiene la estructura esperada.');
        }

        await insertData(data);

        console.log('Base de datos configurada correctamente.');
    } catch (error) {
        console.error('Error configurando la base de datos:', error);
    } finally {
        await mongoose.connection.close();
    }
}

setupDatabase();


