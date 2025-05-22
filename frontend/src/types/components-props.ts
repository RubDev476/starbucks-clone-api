import type { LinkAccordion, MenuItem, Category } from "./global";

export type MainSectionProps = {
    urlImg: string;
    title: string;
    description: string;
    btnAction: string;
    alt: string;
    typeSection: 'main-1' | 'main-2' | 'main-3' | 'main-4' | 'main-5';
    reverse: boolean;
}

export type AccordionItemProps = {
    btnTitle: string;
    links: LinkAccordion[]
}

type FetchProps<T> = {
    data: T[];
}

export type AsideMenuProps = FetchProps<MenuItem>;

export type SubCategoriesProps = FetchProps<Category>;
