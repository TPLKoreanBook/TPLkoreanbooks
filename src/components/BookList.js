import { useState } from 'react';
import axios from 'axios';
import useAsync from '../hooks/useAsync';
import style from './BookList.module.css'

async function getBooks() {
    // Got it working by throwing my tpl_json.json file into the Public folder and calling it by:
    const response = await axios.get('tpl_json.json');
    return response.data;
}

const BookList = () => {

    const [visible, setVisible] = useState(5)
    const [state] = useAsync(getBooks, []);
    const { loading, data, error } = state;

    const showMoreBooks = () => {
        setVisible((prev) => prev + 5)
    }

    const showLessBooks = () => {
        setVisible((prev) => prev - 5)
    }
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    if (!data) return null

    return (
        <section className={style['book-list']}>
            <ul className={style['list-container']}>
                {data.books[0].slice(0, visible).map((book, index) => (
                    // This part can be List component
                    <li key={book.count_number}>
                        <h3>Title: {book.title}</h3>
                        <p>Description: ???</p>
                    </li>
                ))}
            </ul>
            <button onClick={showMoreBooks}>Show More!</button>
            <button onClick={showLessBooks}>Show Less!</button>
        </section>
    )
};

export default BookList;