import React from 'react';
import styles from './Book.module.css';


function Book({ cover, title, address, author }) {
    return (
        <li className={styles['book-container']}>
            <div className={styles.img}>
                <img src={cover} alt="" />
            </div>
            <h3 className={styles['booktitle']} >{title}</h3>
            {/* <h4 className={styles['author']}>{author}</h4> */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, nobis rerum repudiandae?</p>
            <a href={address} className={styles['link-btn']}>Link</a>
        </li>
    )
}

export default Book;