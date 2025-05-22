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
    id: string;
    name: string;
    image: string;
}

export type FetchMainCategories = {
    success: boolean;
    data: MenuItem[];
}

export type FetchSubCategories = Pick<FetchMainCategories, 'success'> & {
    data: Category;
}
