import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne, OneToMany, JoinColumn} from "typeorm";

import Menu from "./Menu";
import Subcategory from "./Subcategory";

@Entity("category")
@Unique(["id", "title", "slug"])
class Category {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar"})
    title!: string;

    @Column({type: "varchar"})
    img!: string;

    @Column({type: "varchar"})
    slug!: string;

    @OneToMany(() => Subcategory, subcategory => subcategory.category)
    subcategories!: Subcategory[];

    @ManyToOne(() => Menu, menu => menu.categories)
    @JoinColumn({ name: 'idMenu' })
    menu!: Menu;
}

export default Category;