import { Link } from 'react-router-dom';
import type { AsideMenuProps } from '../../../types/components-props';

export default function AsideMenu({data}: AsideMenuProps) {
    return (
        <aside>
            {data.map((item: any) => (
                <div key={item.slug}>
                    <p>{item.name}</p>

                    <ul>
                        {item.types.map((sub: any) => (
                            <li key={sub.title}>
                                <Link to={`/menu/${item.slug}/${sub.title}`}  className='w-full'>{sub.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    )
}
