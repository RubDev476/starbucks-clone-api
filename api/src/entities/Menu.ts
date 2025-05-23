import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from "typeorm";

import Category from "./Category";

@Entity("menu")
@Unique(["id", "title"])
class Menu {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "text"})
    title!: string;

    @OneToMany(() => Category, category => category.menu)
    categories!: Category[];
}

export default Menu;