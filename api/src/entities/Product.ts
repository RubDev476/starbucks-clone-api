import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne, JoinColumn } from "typeorm";

import Subcategory from "./Subcategory";

@Entity("product")
@Unique(["id", "name"])
class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar"})
    name!: string;
    
    @Column({type: "varchar"})
    img!: string;

    @Column({type: "varchar"})
    imgSmall!: string;

    @ManyToOne(() => Subcategory, subcategory => subcategory.products)
    @JoinColumn({name: "idSubcategory"})
    subcategory!: Subcategory;
}

export default Product;