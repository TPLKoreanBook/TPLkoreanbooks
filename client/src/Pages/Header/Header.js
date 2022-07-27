import { useEffect, useState } from 'react';
import { NavLink, useLocation, } from 'react-router-dom'
import SearchForm from '../../components/SearchForm';
import styles from './Header.module.css';

const Header = ({ categoryName, onSearch, resetSearchTerm, onCategory }) => {
    const url = useLocation();
    const [navExpanded, setNavExpanded] = useState(false);


    const navHandler = () => {
        setNavExpanded((prev) => !prev);
    }
    useEffect(() => {
        resetSearchTerm('');

        const resetBurgerMenu = () => {
            if (window.innerWidth > 840) {
                setNavExpanded(false);
            }
        }

        window.addEventListener('resize', resetBurgerMenu);

        return () => {
            window.removeEventListener('resize', resetBurgerMenu)
        }
    }, [url, resetSearchTerm]);
    return (
        <header className={styles['header-container']}>
            <div className={`wrapper ${styles['header-contents']}`}>
                <div className={styles['divider']}>
                    <NavLink to="/" className={styles['logo-link']}>
                        <img className={styles['logo']} src="/logo.png" alt="logo" />
                        Koppulso
                    </NavLink>

                    <nav className={styles['navbar']}>
                        <div className={styles['burger-menu']} onClick={navHandler}>hi</div>
                        <ul className={`${styles['nav-list']} ${navExpanded ? styles['active'] : ''}`}>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                                    to="/"
                                    replace>About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                                    to="/book"
                                    replace>Library
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                                    to="/yyy"
                                    replace>Contact
                                </NavLink>
                            </li>
                        </ul>

                    </nav>
                </div>


                {url.pathname === "/book" && <SearchForm
                    categoryName={categoryName}
                    onSearch={onSearch}
                    onCategory={onCategory}
                // children={children}
                />}
            </div>

        </header>
    );
};

export default Header;
