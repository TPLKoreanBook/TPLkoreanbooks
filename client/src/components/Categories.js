import styles from './Categories.module.css';

const Categories = ({ onCategory }) => {

    const categoryHash = {
        "all": 'all',
        "어린이": 'children',
        "청소년": 'youngadult',
        "좋은부모": 'parenting',
        "소설/시/희곡": 'novelpoetryplay',
        "에세이": 'essay',
        "인문학": 'humanities',
        "사회과학": 'sociology',
        "역사": 'history',
        "과학": 'science',
        "예술/대중문화": 'artculture',
        "종교/역학": 'religion',
        "경제경영": 'economy',
        "자기계발": 'selfhelp',
        "외국어": 'foreignlanguage',
        "가정/요리/뷰티": 'homecookbeauty',
        "건강/취미/레저": 'healthleisure',
        "기타": 'etc'
    };
    const selectedCategory = (tp) => {
        // const converted = tp.replaceAll('/', '+');
        onCategory(categoryHash[tp]);
    }

    return (

        <ul className={styles['categories-container']}>
            {Object.keys(categoryHash).map((item, index) =>
                <li key={index}
                    onClick={
                        () => { selectedCategory(item) }}
                > {item}
                </li>
            )}
        </ul>

    )
}
export default Categories;

