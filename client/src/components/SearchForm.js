import { useState } from 'react';
import Categories from './Categories';
import styles from './SearchForm.module.css';

const SearchForm = ({ categoryName, onSearch, onCategory }) => {
    const [toggleCategory, setToggleCategory] = useState(true);
    const newStr = categoryName.replaceAll('+', '/');


    const categoryHandler = () => {
        setToggleCategory((prev) => !prev);
    }

    const searchHandler = (e) => {
        onSearch(e.target.value)
    }
    return (
        <div className={styles['search-container']}>
            <div className={styles['input-container']}>
                <button className={styles['category-btn']} onClick={categoryHandler}>{newStr}</button>
                <input className={styles['searchbar']} type="text" placeholder='Search...' onChange={searchHandler} />
            </div>
            <div className={styles['dropdown-menu']}>
                {toggleCategory && <Categories onCategory={onCategory} />}
            </div>
        </div>
    )
};

export default SearchForm;