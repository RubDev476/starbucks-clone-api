import { Link, useLocation, Outlet } from "react-router-dom";

import { MenuTitle, SubCategorieTitle, AsideMenu } from "../components/ui";

export default function MainMenu() {
    const {pathname} = useLocation();

    function countOccurrences(str: string, char: string) {
        return str.split(char).length - 1;
    }

    return (
        <>
            <div className="main">
                <div id="menu-main-container" className="max-width-content margin-auto">
                    <AsideMenu />

                    {countOccurrences(pathname, '/') === 1 && (
                        <div className="menu-container w-full">
                            <MenuTitle title="Menu" />

                            <SubCategorieTitle title="Drinks" />

                            <div className="subcategories-container">
                                <Link to='/menu/drinks/hot-coffee' className="menu-item">
                                    <img src="https://res.cloudinary.com/dkav9fvlo/image/upload/v1734545863/Starbucks-API/Main%20categories/drinks/f31l5enlhrxjfk5fo6it.avif" alt="menu-item" />

                                    Hot Coffees
                                </Link>

                                <Link to='#' className="menu-item">
                                    <img src="https://res.cloudinary.com/dkav9fvlo/image/upload/v1734545864/Starbucks-API/Main%20categories/drinks/wlsg8xujkyiwdvca019t.avif" alt="menu-item" />

                                    Cold Coffees
                                </Link>

                                <Link to='#' className="menu-item">
                                    <img src="https://res.cloudinary.com/dkav9fvlo/image/upload/v1734545862/Starbucks-API/Main%20categories/drinks/l1g7nophgq3gs1dqsnzv.avif" alt="menu-item" />

                                    Starbucks Refreshers Beverages
                                </Link>

                                <Link to='#' className="menu-item">
                                    <img src="https://res.cloudinary.com/dkav9fvlo/image/upload/v1734545862/Starbucks-API/Main%20categories/drinks/qy73cy8xnmbqcwbnhqxy.avif" alt="menu-item" />

                                    Frappuccino Blended Beverages
                                </Link>
                            </div>
                        </div>
                    )}

                    <Outlet />
                </div>
            </div>
        </>
    )
}
