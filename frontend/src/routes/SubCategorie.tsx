import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { MenuTitle, SubCategorieTitle } from "../components/ui";

export default function SubCategorie() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>([]);

    const location = useLocation();

    useEffect(() => {
        const fn = async () => {
            const { data }: any = await fetch('http://localhost:4000/api/menu').then(res => res.json());

            console.log(data);

            setData(data);
            setLoading(false);
        }

        fn();
    }, []);


    if (!location.pathname.includes('drinks') && !location.pathname.includes('food')) return <main>category not found</main>

    if(loading) return <main>Loading...</main>;

    if(!loading) return (
        <>
            <div className="menu-container w-full">
                <MenuTitle title="Hot Coffees" />

                <SubCategorieTitle title="Americanos" />

                <div className="subcategories-container sub text-center">
                    <Link to='/menu/drinks/hot-coffee' className="menu-item sub-categorie">
                        <img src="https://res.cloudinary.com/dkav9fvlo/image/upload/v1734545863/Starbucks-API/Main%20categories/drinks/f31l5enlhrxjfk5fo6it.avif" alt="menu-item" />

                        Caffe americano
                    </Link>

                    <Link to='#' className="menu-item sub-categorie">
                        <img src="https://res.cloudinary.com/dkav9fvlo/image/upload/v1734545864/Starbucks-API/Main%20categories/drinks/wlsg8xujkyiwdvca019t.avif" alt="menu-item" />

                        Cold Coffees
                    </Link>

                    <Link to='#' className="menu-item sub-categorie">
                        <img src="https://res.cloudinary.com/dkav9fvlo/image/upload/v1734545862/Starbucks-API/Main%20categories/drinks/l1g7nophgq3gs1dqsnzv.avif" alt="menu-item" />

                        Starbucks Refreshers Beverages
                    </Link>

                    <Link to='#' className="menu-item sub-categorie">
                        <img src="https://res.cloudinary.com/dkav9fvlo/image/upload/v1734545862/Starbucks-API/Main%20categories/drinks/qy73cy8xnmbqcwbnhqxy.avif" alt="menu-item" />

                        Frappuccino Blended Beverages
                    </Link>
                </div>
            </div>
        </>
    )
}
