import React from 'react';
import styles from './Book.module.css';


function Book({ cover, title, address, author }) {
    return (
        <li className={styles['book-container']}>
            <div className={styles['img-container']}>
                <img src={cover} alt="" />
            </div>
            <h3 className={styles['booktitle']} >{title}</h3>
            <h4>{author}</h4>
            <a href={address} target="_blank" rel="noopener noreferrer" className={styles['link-btn']}>Link</a>
        </li>
    )
}

export default Book;