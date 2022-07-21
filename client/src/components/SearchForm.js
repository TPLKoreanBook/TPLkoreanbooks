import { useState } from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ categoryName, onSearch, children }) => {
    const [toggleCategory, setToggleCategory] = useState(true);

    const categoryHandler = () => {
        setToggleCategory((prev) => !prev);
    }

    const searchHandler = (e) => {
        onSearch(e.target.value)
    }
    return (
        <div className={styles['search-container']}>
            <button className={styles['category-btn']} onClick={categoryHandler}>{categoryName}</button>
            <input className={styles['searchbar']} type="text" placeholder='Search...' onChange={searchHandler} />
            <div className={styles['dropdown-menu']}>
                {toggleCategory && children}
            </div>
        </div>
    )
};

export default SearchForm;