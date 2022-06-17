import React, { useState } from 'react';
import { Line } from 'rc-progress';
import styles from './BookList.module.css';
import axios from 'axios';
import useAsync from '../hooks/useAsync'
import Book from './Book.js'

async function getBooks(category) {
    // const response = await axios.get(`https://tpl-server-heroku.herokuapp.com/${category}`);
    const response = await axios.get(`https://tpl-server-heroku.herokuapp.com/books`);
    // console.log(response);

    return response.data;
}

const BookList = ({ category, userInput }) => {

    const [state] = useAsync(() => getBooks(category), [category],);
    const { loading, data, error } = state;
    const [visible, setVisible] = useState(20);


    const showMoreBooks = () => {
        setVisible((prev) => prev + 20)
    }

    // Error handling.
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    if (!data) return null

    return (
        <section className={`wrapper ${styles['book-list']}`}>
            <div>
                <h2 className={styles['category']}>{category === '' ? 'All' : category}</h2>
                <ul className={styles['list-container']}>
                    {/* Test filtering
                    {/* Filtered by users' selected category */}
                    {data
                        // After being filtered by the user's selected category, It will be filtered by the user's search input.
                        .filter((book) => {
                            if (book.title.replace(/\s/g, '').includes(userInput.replace(/\s/g, '').substring(0, userInput.length))) {
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
                <h3>{visible} /{data.length}</h3>
                <div className={styles['progress-bar']}>
                    <Line
                        percent={visible / data.length * 100}
                        trailWidth={2}
                        strokeWidth={4}
                        trailColor="#000000"
                        strokeColor="#D3D3D3" />
                </div>
                <button onClick={showMoreBooks}>Show More!</button>
            </div>
        </section>
    )
};

export default BookList;
