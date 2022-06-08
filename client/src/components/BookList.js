import React, { useState } from 'react';
import styles from './BookList.module.css';
import axios from 'axios';
import useAsync from '../hooks/useAsync'
import Book from './Book.js'

async function getBooks(category) {
    const response = await axios.get(`http://127.0.0.1:5000/category/${category}`);
    console.log(response);

    return response.data;
}

const BookList = ({ category, userInput }) => {

    const [state] = useAsync(() => getBooks(category), [category],);
    const { loading, data, error } = state;
    const [visible, setVisible] = useState(20);


    const showMoreBooks = () => {
        setVisible((prev) => prev + 20)
    }

    const showLessBooks = () => {
        setVisible((prev) => prev - 20)
    }

    // Error handling.
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    if (!data) return null

    return (
        <section className={styles['book-list']}>
            <div>
                <h2 className={styles['category']}>{category === '' ? 'All' : category}</h2>
                <ul className={styles['list-container']}>
                    {/* Test filtering
                    {/* Filtered by users' selected category */}
                    {data
                        // After being filtered by the user's selected category, It will be filtered by the user's search input.
                        .filter((book) => {
<<<<<<< HEAD
                            if (book.title.replace(/\s/g, '').includes(userInput.replace(/\s/g, '').substring(0, userInput.length))) {                                return book;
=======
                            if (book.title.replace(/\s/g, '').includes(userInput.replace(/\s/g, '').substring(0, userInput.length))) {
                                return book;
>>>>>>> seungmin
                            }
                        }).slice(0, visible).map((book, index) => (
                            <Book
                                key={book.count}
                                cover={book.cover}
                                title={book.title}
                                author={book.author}
                                address={book.link}
                            />
                        ))}
                </ul>
                <button onClick={showMoreBooks}>Show More!</button>
                <button onClick={showLessBooks}>Show Less!</button>
            </div>
        </section>
    )
};

export default BookList;
