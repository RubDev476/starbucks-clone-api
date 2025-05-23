export type LinkAccordion = {
    href: string;
    title: string; 
}

export type MenuItem = {
    id: number;
    title: string;
    categories: {
        id: number;
        slug: string;
        title: string;
        img: string;
    }[];
}

export type Category = {
    title: string;
    subcategories: {
        id: number;
        title: string;
        products: {
            id: number;
            name: string;
            imgSmall: string;
        }[];
    }[];
}

export type Product = {
    id: number;
    name: string;
    img: string;
}
