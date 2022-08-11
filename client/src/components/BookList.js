import React, { useState } from 'react';
import styles from './BookList.module.css';
import axios from 'axios';
import useAsync from '../hooks/useAsync';
import Book from './Book.js';
import { useEffect } from 'react';


async function getBooks(category, userInput) {
    const response = await axios.get(`https://tpl-server-heroku.herokuapp.com/${category}`);
    return response.data;
}

const BookList = ({ category, userInput }) => {

    const [state] = useAsync(() => getBooks(category), [category]);
    const { loading, data, error } = state;
    const [filteredData, setFilteredData] = useState([]);
    const [visible, setVisible] = useState(24);

    useEffect(() => {
        if (data) {

            if (!userInput) return setFilteredData(data);

            const filtered = data.filter((book) =>
                book.title.replace(/\s/g, '').includes(userInput.replace(/\s/g, '').substring(0, userInput.length)) ||
                book.author.replace(/\s/g, '').includes(userInput.replace(/\s/g, '').substring(0, userInput.length))
            )
            return setFilteredData(filtered);
        };
        // console.log(userInput);
    }, [data, userInput]);

    const showMoreBooks = () => {
        setVisible((prev) => prev + 24)
    }

    // Error handling.
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    if (!data) return null

    return (
        <section className={styles['book-list']}>
            <div className={`wrapper ${styles['list-wrapper']}`}>

                <div className={styles['status-container']}>
                    <h2>Toronto Public Library 에 존재하는 한국 책들을 한국어 검색으로 손쉽게 찾으세요.</h2>
                    <p>1 - {filteredData.length} of {data.length} results</p>
                </div>

                <ul className={styles['list-container']}>
                    {filteredData
                        .slice(0, visible).map((book, index) => (
                            <Book
                                key={book.id}
                                cover={book.cover}
                                title={book.title}
                                author={book.author}
                                address={book.link}
                            />
                        ))}
                </ul>
                {filteredData.length > visible && <button className={styles['showMore-btn']} onClick={showMoreBooks}>Show More!</button>}

            </div>
        </section>
    )
};

export default BookList;
