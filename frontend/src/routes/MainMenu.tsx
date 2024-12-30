import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

import { MenuTitle, SubCategorieTitle, AsideMenu } from "../components/ui";

export default function MainMenu() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>([]);

    const {pathname} = useLocation();

    useEffect(() => {
        const fn = async () => {
            const {data}: any = await fetch('http://localhost:4000/api/menu').then(res => res.json());
    
            console.log(data);
    
            setData(data);
            setLoading(false);
        }
    
        fn();
    }, []);

    function countOccurrences(str: string, char: string) {
        return str.split(char).length - 1;
    }

    if(loading) return <main>Loading...</main>;

    if(!loading) return (
        <>
            <div className="main">
                <div id="menu-main-container" className="max-width-content margin-auto">
                    <AsideMenu data={data} />

                    {countOccurrences(pathname, '/') === 1 && (
                        <div className="menu-container w-full">
                            <MenuTitle title="Menu" />

                            {data.map((item: any) => (
                                <div key={item.slug} className="menu-subcontainer">
                                    <SubCategorieTitle title={item.name} />

                                    <div className="subcategories-container">
                                        {item.types.map((sub: any) => (
                                            <Link to={`/menu/${item.slug}/${sub.slug}`} key={sub.title} className="menu-item">
                                                <img src={sub.image} alt="menu-item" />

                                                {sub.title}
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
