import { useState } from 'react';
import styles from './Header.module.css';
import {Link,useLocation} from 'react-router-dom'

const Header = (props) => {
    const url = useLocation();
    console.log(url.pathname)
    const [toggleCategory, setToggleCategory] = useState(true);

    const categoryHandler = () => {
        setToggleCategory((prev) => !prev);
    }
    const searchHandler = (e) => {
        props.onSearch(e.target.value)
    }
    return (
        <header className={`wrapper ${styles['header-container']}`}>
            <div>Logo Space</div>
            <nav className={styles['navbar']}>
                <Link to="/">Home</Link>
                <Link to="/book">Book</Link>
                
            </nav>

            {url.pathname === "/book" && 
                <div className={styles['search-container']}>
                <input className={styles['searchbar']} type="text" placeholder='Search...' onChange={searchHandler} />
                <button onClick={categoryHandler}>Category</button>
                <div className={styles['dropdown-menu']}>
                    {toggleCategory && props.children}
                </div>
            </div>}
            
        </header>
    );
};

export default Header;
