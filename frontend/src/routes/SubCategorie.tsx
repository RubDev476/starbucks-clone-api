import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { MenuTitle, SubCategorieTitle } from "../components/ui";

import type { FetchSubCategories, SubCategory } from "../types/global";

export default function SubCategorie() {
    const [data, setData] = useState<SubCategory | null>(null);

    const location = useLocation();

    function extractTextAfterThirdSlash(path: string): string {
        const parts = path.split('/');
        if (parts.length > 3) {
            return parts.slice(3).join('/');
        }
        return '';
    }

    useEffect(() => {
        const getSubCategories = async () => {
            const result = extractTextAfterThirdSlash(location.pathname);

            const { data }: FetchSubCategories = await fetch(`http://localhost:4000/api/menu/type/title/${result}`).then(res => res.json());

            console.log(data);

            setData(data);

            window.scrollTo(0, 0);
        }

        getSubCategories();
    }, [location]);


    //if (!location.pathname.includes('drinks') || !location.pathname.includes('food')) return <main>category not found</main>

    if(data) return (
        <>
            <div className="menu-container w-full">
                <MenuTitle title={data.title} />

                {data.categories.map((categories) => (
                    <div key={categories.title} className="menu-subcontainer">
                        <SubCategorieTitle title={categories.title} />

                        <div className="subcategories-container sub text-center">
                            {categories.products.map((product) => (
                                <Link key={product.id} to={`/menu/${categories.title}/${product.id}`} className="menu-item sub-categorie">
                                    <img src={product.imageSmall} alt="menu-item" />

                                    {product.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
