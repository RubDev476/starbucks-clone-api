import { Link } from 'react-router-dom';

export default function AsideMenu() {
    return (
        <aside>
            <p>Drinks</p>

            <ul>
                <li className='w-full'><Link to='/menu/drinks/hot-coffee' className='w-full'>Hot Coffees</Link></li>
                <li><Link to='/menu/drinks/hot-coffee'>Cold Coffees</Link></li>
                <li><Link to='/menu/drinks/hot-coffee'>Starbucks Refreshers Beverages</Link></li>
                <li><Link to='/menu/drinks/hot-coffee'>Frappuccino Blended Beverages</Link></li>
                <li><Link to='/menu/drinks/hot-coffee'>Iced Tea & Lemonade</Link></li>
            </ul>
        </aside>
    )
}
