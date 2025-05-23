import express from "express";
import { Request, Response } from "express";
import "reflect-metadata";
import cors from "cors";

import { connectDB, appDataSource } from "./config/db";

import Menu from "./entities/Menu";
import Product from "./entities/Product";
import Category from "./entities/Category";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running in: ${PORT}`);
});

app.use("/api/menu", async (req: Request, res: Response) => {
    const getMenu = await appDataSource.getRepository(Menu)
        .createQueryBuilder("menu")
        .leftJoinAndSelect("menu.categories", "category")
        .getMany()

    res.json(getMenu);
})

app.use("/api/category/:slugCategory", async (req: Request, res: Response) => {
    const {slugCategory} = req.params;

    try {
        const getSubCategories = await appDataSource.getRepository(Category)
            .createQueryBuilder("category")
            .leftJoinAndSelect("category.subcategories", "subcategory")
            .leftJoinAndSelect("subcategory.products", "product")
            .where("category.slug = :slugCategory")
            .setParameter("slugCategory", slugCategory)
            .select([
                "category.title",
                "subcategory",
                "product.id",
                "product.name",
                "product.imgSmall"
            ])
            .getOne()

        if(getSubCategories) {
            res.json(getSubCategories);
        } else {
            res.status(404).json({message: "Category not found"})
        }
    } catch (error) {
        console.log(error);
    }
})

app.use("/api/product/:idProduct", async (req: Request, res: Response) => {
    const {idProduct} = req.params;

    const id = parseInt(idProduct);

    if(isNaN(id) || !id) {
        res.status(403).json({message: "Invalid param"})

        return;
    }

    try {
        const getProduct = await appDataSource.getRepository(Product).findOneBy({id})

        if(getProduct) {
            res.json(getProduct);
        } else {
            res.status(404).json({message: "Product not found"})
        }
    } catch (error) {
        console.log(error);
    }
})
