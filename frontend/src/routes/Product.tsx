import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { BACKEND_URL } from "../utils/global-vars";

import type { Product } from "../types/global";

export default function Product() {
    const [product, setProduct] = useState<Product | null>(null);

    const location = useLocation();

    function extractTextAfterThirdSlash(path: string): string {
        const parts = path.split('/');
        if (parts.length > 3) {
            return parts.slice(3).join('/');
        }
        return '';
    }

    useEffect(() => {
        const getProduct = async () => {
            const result = extractTextAfterThirdSlash(location.pathname);

            console.log(result)

            try {
                const response = await fetch(BACKEND_URL + `/api/menu/product/id/${result}`);

                if (!response.ok) {
                    //throw new Error(`HTTP error! status: ${response.status}`);
                    throw new Error(response.status.toString());
                }

                const { data }: any = await response.json();

                setProduct(data);

                window.scrollTo(0, 0);
            } catch (error: any) {
                if (error.message === '404') {
                    console.log('404 Not Found');

                    return;
                }

                //console.error('Error fetching subcategories:', error.message);
            }
        }

        if (location.pathname) {
            getProduct();
        }
    }, [location]);

    if (product) return (
        <main id="product">
            <article className="all-center w-full">
                <img src={product.image} alt="img-product" className="w-full" />

                <h1>{product.name}</h1>
            </article>
        </main>
    )
}