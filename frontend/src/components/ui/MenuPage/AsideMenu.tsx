import { Link, useLocation } from 'react-router-dom';
import type { AsideMenuProps } from '../../../types/components-props';

export default function AsideMenu({data}: AsideMenuProps) {
    const location = useLocation();

    if(!location.pathname.includes('product')) return (
        <aside>
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>

                    <ul>
                        {item.categories.map((sub) => (
                            <li key={sub.title}>
                                <Link to={`/menu/${sub.slug}`}  className='w-full'>{sub.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    )
}
