import SearchForm from '../../components/SearchForm';
import styles from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom'

const Header = ({ categoryName, onSearch, children }) => {
    const url = useLocation();

    return (
        <header className={styles['header-container']}>
            <div className={`wrapper ${styles['header-contents']}`}>

                <nav className={styles['navbar']}>
                    <NavLink to="/">
                        <img className={styles['logo']} src="/logo.png" alt="logo" />
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                        to="/">Home</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? styles['link-active'] : styles['link']}
                        to="/book">Library</NavLink>

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
