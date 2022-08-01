import { useEffect } from 'react';
import { useState } from 'react';
import Categories from './Categories';
import styles from './SearchForm.module.css';

const SearchForm = ({ categoryName, onSearch, onCategory }) => {
    const [toggleCategory, setToggleCategory] = useState(true);

    const categoryHash = {
        "all": 'all',
        'children': "어린이",
        "youngadult": '청소년',
        "parenting": '좋은부모',
        "novelpoetryplay": '소설/시/희곡',
        "essay": '에세이',
        "humanities": '인문학',
        "sociology": '사회과학',
        "history": '역사',
        "science": '과학',
        "artculture": '예술/대중문화',
        "religion": '종교/역학',
        "economy": '경제경영',
        "selfhelp": '자기계발',
        "foreignlanguage": '외국어',
        "homecookbeauty": '가정/요리/뷰티',
        "healthleisure": '건강/취미/레저',
        "etc": '기타'
    };
    // const newStr = categoryName.replaceAll('+', '/');

    useEffect(() => {
        setToggleCategory(false);
    }, [categoryName])
    const categoryHandler = () => {
        setToggleCategory((prev) => !prev);
    }

    const searchHandler = (e) => {
        onSearch(e.target.value)
    }
    return (
        <div className={styles['search-container']}>
            <div className={styles['input-container']}>
                <button className={styles['category-btn']} onClick={categoryHandler}>{categoryHash[categoryName]}</button>
                <input className={styles['searchbar']} type="text" placeholder='Search...' onChange={searchHandler} />
            </div>
            <div className={styles['dropdown-menu']}>
                {toggleCategory && <Categories onCategory={onCategory} />}
            </div>
        </div>
    )
};

export default SearchForm;