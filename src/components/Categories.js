import React from 'react';
import styles from './Categories.module.css';
import searchHandler from './BookList'
import setSearchTerm from './BookList'

const Categories = ({ onCategory }) => {
    const category = [
        "All",
        "어린이",
        "청소년",
        "좋은부모",
        "소설/시/희곡",
        "에세이",
        "인문학",
        "사회과학",
        "역사",
        "과학",
        "예술/대중문화",
        "종교/역학",
        "경제경영",
        "자기계발",
        "외국어",
        "가정/요리/뷰티",
        "건강/취미/레저",
        "기타"];

    const selectedCategory = (tp) => {
        onCategory(tp);
    }

   
    return (
        <div className={styles['categories-container']}>
            
            {/* <h2>Categories</h2> */}
            <ul className={styles['categories-list']}>
                {category.map((item, index) => <li key={index} className={styles['list']} onClick={() => selectedCategory(item)}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories;