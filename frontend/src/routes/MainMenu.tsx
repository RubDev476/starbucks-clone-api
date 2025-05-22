import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

import { MenuTitle, SubCategorieTitle, AsideMenu, Loader } from "../components/ui";
import type { MenuItem } from "../types/global";
import { BACKEND_URL } from "../utils/global-vars";

export default function MainMenu() {
    const [loading, setLoading] = useState(true);
    const [menuItems, setCategories] = useState<MenuItem[]>([]);

    const {pathname} = useLocation();

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch(BACKEND_URL + '/api/menu').then(res => res.json());

            setCategories(res);
            setLoading(false);
        }
    
        getCategories();
    }, []);

    if(loading) return <Loader />;

    if(!loading) return (
        <>
            <div className="main">
                <div id="menu-main-container" className="max-width-content margin-auto">
                    <AsideMenu data={menuItems} />

                    {pathname === '/menu' && (
                        <div className="menu-container w-full">
                            <MenuTitle title="Menu" />

                            {menuItems.map((menu) => (
                                <div key={menu.id} className="menu-subcontainer">
                                    <SubCategorieTitle title={menu.title} />

                                    <div className="subcategories-container">
                                        {menu.categories.map((category) => (
                                            <Link to={`/menu/${category.slug}`} key={category.id} className="menu-item">
                                                <img src={category.img} alt="menu-item" />

                                                {category.title}
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
