import React, { useState, useEffect } from 'react';
import styles from './BookList.module.css';
import axios from 'axios';
import useAsync from '../hooks/useAsync'
import Book from './Book.js'

async function getBooks(category, setSearchTerm) {
    const response = await axios.get(`http://127.0.0.1:5000/category/${category}`);
    console.log(response);
    setSearchTerm('');
    return response.data;
}

const BookList = ({ category }) => {

    const [state] = useAsync(() => getBooks(category, setSearchTerm), [category],);
    const { loading, data, error } = state;
    const [visible, setVisible] = useState(6);
    const [searchTerm, setSearchTerm] = useState('');


    const showMoreBooks = () => {
        setVisible((prev) => prev + 6)
    }

    const showLessBooks = () => {
        setVisible((prev) => prev - 6)
    }

    const searchHandler = (e) => {
        const userInput = e.target.value;
        setSearchTerm(userInput)
    }
    // Error handling.
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    if (!data) return null

    return (
        <section className={styles['book-list']}>
            <div>
                <input className={styles['searchbar']} type="text" placeholder='Search...' onChange={searchHandler} />
                <h2 className={styles['category']}>{category === '' ? 'All' : category}</h2>
                <ul className={styles['list-container']}>
                    {/* Test filtering
                    {/* Filtered by users' selected category */}
                    {data
                        // After being filtered by the user's selected category, It will be filtered by the user's search input.
                        .filter((book) => {
                            if (book.title.replace(/\s/g, '').includes(searchTerm.replace(/\s/g, '').substring(0, searchTerm.length))) {
                                return book;
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
