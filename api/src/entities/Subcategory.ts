import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne, OneToMany, JoinColumn } from "typeorm";

import Category from "./Category";
import Product from "./Product";

@Entity("subcategory")
@Unique(["id", "title"])
class Subcategory {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar"})
    title!: string;

    @ManyToOne(() => Category, category => category.subcategories)
    @JoinColumn({name: "idCategory"})
    category!: Category;

    @OneToMany(() => Product, product => product.subcategory)
    products!: Product[];
}

export default Subcategory;