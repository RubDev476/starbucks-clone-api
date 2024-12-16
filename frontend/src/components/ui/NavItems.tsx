import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function NavItems() {
    const location = useLocation();
    
    return (
        <>
            <ul className="main-nav">
                <li className={`${location.pathname.includes('/menu') ? 'location' : ''}`}><Link to="/" aria-label="menu">Menu</Link></li>
                <li className={`${location.pathname === '/rewards' ? 'location' : ''}`}><Link to="/" aria-label="rewards">Rewards</Link></li>
                <li className={`${location.pathname === '/gift' ? 'location' : ''}`}><Link to="/" aria-label="gift-cards">Gift Cards</Link></li>
            </ul>

            <hr />

            <div className='auxiliary-nav'>
                <div className="sign-in-container">
                    <a href="#" aria-label="sign-in">Sign In</a>
                    <a href="#" aria-label="join">Join Now</a>
                </div>

                <a href="#"><FontAwesomeIcon icon={faLocationDot} className="icon" /> Find a store</a>
            </div>
        </>
    )
}
