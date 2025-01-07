import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

import { MenuTitle, SubCategorieTitle, AsideMenu, Loader } from "../components/ui";
import type { FetchMainCategories, MainCategory } from "../types/global";

export default function MainMenu() {
    const [loading, setLoading] = useState(true);
    const [MainCategoriesFetch, setCategories] = useState<MainCategory[]>([]);

    const {pathname} = useLocation();

    useEffect(() => {
        const getCategories = async () => {
            const {data}: FetchMainCategories = await fetch('http://localhost:4000/api/menu').then(res => res.json());
    
            setCategories(data);
            setLoading(false);
        }
    
        getCategories();
    }, []);

    if(loading) return <Loader />;

    if(!loading) return (
        <>
            <div className="main">
                <div id="menu-main-container" className="max-width-content margin-auto">
                    <AsideMenu data={MainCategoriesFetch} />

                    {pathname === '/menu' && (
                        <div className="menu-container w-full">
                            <MenuTitle title="Menu" />

                            {MainCategoriesFetch.map((category) => (
                                <div key={category.slug} className="menu-subcontainer">
                                    <SubCategorieTitle title={category.name} />

                                    <div className="subcategories-container">
                                        {category.types.map((type) => (
                                            <Link to={`/menu/${type.title}`} key={type.slug} className="menu-item">
                                                <img src={type.image} alt="menu-item" />

                                                {type.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <Outlet />
                </div>
            </div>
        </>
    )
}
