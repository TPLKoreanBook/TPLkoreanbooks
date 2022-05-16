import styles from './Categories.module.css';

const Categories = () => {
    return (
        <div className={styles['categories-container']}>
            <h2>Categories</h2>
            <ul>
                <li>소설</li>
                <li>시/에세이</li>
                <li>경제/경영</li>
                <li>자기계발</li>
                <li>인문</li>
                <li>역사/문화</li>
                <li>예술/대중문화</li>
                <li>과학</li>
            </ul>
        </div>
    )
}

export default Categories;