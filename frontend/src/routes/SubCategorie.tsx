import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { MenuTitle, SubCategorieTitle } from "../components/ui";

import type { FetchSubCategories, SubCategory } from "../types/global";

export default function SubCategorie() {
    const [data, setData] = useState<SubCategory | null>(null);
    const [prevLocation, setPrevLocation] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const location = useLocation();

    function extractTextAfterThirdSlash(path: string): string {
        const parts = path.split('/');
        if (parts.length > 2) {
            return parts.slice(2).join('/');
        }
        return '';
    }

    useEffect(() => {
        const getSubCategories = async () => {
            const result = extractTextAfterThirdSlash(location.pathname);

            try {
                const response = await fetch(`http://localhost:4000/api/menu/type/title/${result}`);
                if (!response.ok) {
                    //throw new Error(`HTTP error! status: ${response.status}`);
                    throw new Error(response.status.toString());
                }

                const { data }: FetchSubCategories = await response.json();

                console.log(data);

                setData(data);

                window.scrollTo(0, 0);
            } catch (error: any) {
                if(error.message === '404') {
                    console.log('404 Not Found');
                    setErrorMessage('404 Not Found');
                    return;
                }

                //console.error('Error fetching subcategories:', error.message);
            }
        }

        if (location.pathname !== prevLocation) {
            getSubCategories();
            setPrevLocation(location.pathname);
        }
    }, [location, prevLocation]);

    if (errorMessage) return <main>{errorMessage}</main>

    if(data) return (
        <>
            <div className="menu-container w-full">
                <MenuTitle title={data.title} />

                {data.categories.map((categories) => (
                    <div key={categories.title} className="menu-subcontainer">
                        <SubCategorieTitle title={categories.title} />

                        <div className="subcategories-container sub text-center">
                            {categories.products.map((product) => (
                                <Link key={product.id} to={`/menu/product/${product.id}`} className="menu-item sub-categorie">
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
