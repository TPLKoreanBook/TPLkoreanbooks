import React,{useState} from 'react';
import styles from './Categories.module.css';



const Categories = ({ onCategory }) => {
    const category = [
        "all",
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
        const converted = tp.replaceAll('/', '+');
        onCategory(converted);
    }

    const [selected, setSelected] = useState(Array(category.length).fill(false));

    const changeColor = (index) => {
        const newArr = Array(category.length).fill(false);
        newArr[index] = true;
        setSelected(newArr)
        console.log(selected)
        };

        

    return (
        <>
            <ul className={styles['categories-container']}>
                {category.map((item, index) => 
                    <li key={index} 
                        className={styles[selected[index] ? 'list' : '' ] } 
                        onClick={ 
                            () => {selectedCategory(item); changeColor(index);}}
                            > {item}
                    </li>
                    )}
            </ul>
        </>
    )
}
export default Categories;

