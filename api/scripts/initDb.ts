import mongoose from 'mongoose';
import { Section, Type, Category, Product } from '../src/models';
// @ts-ignore
import data from '../jsons/dataUsa.json';

async function setupDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/starbucks_api');


        await mongoose.connection.asPromise();

        // Validar que el JSON tenga la estructura esperada
        if (!data || !data.menu || !data.menu.sections) {
            throw new Error('El archivo JSON no contiene la estructura esperada.');
        }

        // Limpiar la base de datos
        await mongoose.connection.db?.dropDatabase();

        // Insertar datos desde el JSON
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

        console.log('Base de datos configurada correctamente');
    } catch (error) {
        console.error('Error configurando la base de datos:', error);
    } finally {
        mongoose.connection.close();
    }
}

setupDatabase();
