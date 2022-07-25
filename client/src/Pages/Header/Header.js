import { useEffect } from 'react';
import { NavLink, useLocation, } from 'react-router-dom'
import SearchForm from '../../components/SearchForm';
import styles from './Header.module.css';

const Header = ({ categoryName, onSearch, children, resetSearchTerm }) => {
    const url = useLocation();

    useEffect(() => {
        console.log(url);
        resetSearchTerm('');
    }, [url, resetSearchTerm]);
    return (
        <header className={styles['header-container']}>
            <div className={`wrapper ${styles['header-contents']}`}>

                <NavLink to="/" className={styles['logo-link']}>
                    <img className={styles['logo']} src="/logo.png" alt="logo" />
                    Kopulso
                </NavLink>
                <nav className={styles['navbar']}>


                    <NavLink
                        className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                        to="/"
                        replace>About
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                        to="/book"
                        replace>Library
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                        to="/yyy"
                        replace>Contact
                    </NavLink>

                </nav>

                {url.pathname === "/book" && <SearchForm
                    categoryName={categoryName}
                    onSearch={onSearch}
                    children={children}
                />}
            </div>

        </header>
    );
};

export default Header;
