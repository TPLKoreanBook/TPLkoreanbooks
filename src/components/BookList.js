import { useState } from 'react';
import style from './BookList.module.css'

const BookList = ({ loading, error, data }) => {
    const [visible, setVisible] = useState(5);
    const [userSearch, setUserSearch] = useState('')
    const showMoreBooks = () => {
        setVisible((prev) => prev + 5)
    }

    const showLessBooks = () => {
        setVisible((prev) => prev - 5)
    }

    const searchHandler = (e) => {
        const userInput = e.target.value;
        setUserSearch(userInput)
    }

    // Error handling.
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    if (!data) return null

    return (
        <section className={style['book-list']}>

            <input type="text" placeholder='Search...' onChange={searchHandler} />
            <ul className={style['list-container']}>
                {/* Test filtering */}
                {data.books[0].filter((book) => {
                    if (userSearch === '') {
                        return book;
                    } else if (book.title.includes(userSearch)) {
                        return book;
                    }
                }).slice(0, visible).map((book, index) => (
                    // This part can be List component
                    <li key={book.count_number}>
                        <h3>Title: {book.title}</h3>
                        {/* <p>Description: ???</p> */}
                    </li>
                ))}
            </ul>
            <button onClick={showMoreBooks}>Show More!</button>
            <button onClick={showLessBooks}>Show Less!</button>
        </section>
    )
};

export default BookList;