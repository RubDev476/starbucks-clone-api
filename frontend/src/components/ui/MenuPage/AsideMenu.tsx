import { Link, useLocation } from 'react-router-dom';
import type { AsideMenuProps } from '../../../types/components-props';

export default function AsideMenu({data}: AsideMenuProps) {
    const location = useLocation();

    if(!location.pathname.includes('product')) return (
        <aside>
            {data.map((item) => (
                <div key={item.slug}>
                    <p>{item.name}</p>

                    <ul>
                        {item.types.map((sub) => (
                            <li key={sub.title}>
                                <Link to={`/menu/${sub.title}`}  className='w-full'>{sub.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    )
}
