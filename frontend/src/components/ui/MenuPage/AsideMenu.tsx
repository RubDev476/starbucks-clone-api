import { Link } from 'react-router-dom';

export default function AsideMenu({data}: {data: any}) {
    return (
        <aside>
            {data.map((item: any) => (
                <div key={item.slug}>
                    <p>{item.name}</p>

                    <ul>
                        {item.types.map((sub: any) => (
                            <li key={sub.title}>
                                <Link to={`/menu/${item.slug}/${sub.slug}`}  className='w-full'>{sub.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    )
}
