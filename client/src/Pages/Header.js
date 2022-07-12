import { useState } from 'react';
import styles from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom'

const Header = (props) => {
    const url = useLocation();

    const [toggleCategory, setToggleCategory] = useState(true);

    const categoryHandler = () => {
        setToggleCategory((prev) => !prev);
    }
    const searchHandler = (e) => {
        props.onSearch(e.target.value)
    }

    return (
        <header className={`wrapper ${styles['header-container']}`}>
            <div >
                <NavLink to="/">
                    <img className={styles['logo']} src="/logo.png" alt="logo" />
                </NavLink>
            </div>

            <nav className={styles['navbar']}>
                <NavLink
                    className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                    to="/">Home</NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                    to="/book">Library</NavLink>

            </nav>

            {url.pathname === "/book" &&
                <div className={styles['search-container']}>
                    <input className={styles['searchbar']} type="text" placeholder='Search...' onChange={searchHandler} />
                    <button onClick={categoryHandler}>{props.categoryName}</button>
                    <div className={styles['dropdown-menu']}>
                        {toggleCategory && props.children}
                    </div>
                </div>}

        </header>
    );
};

export default Header;
