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
<<<<<<< HEAD
            {/* <h4 className={styles['author']}>{author}</h4> */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, nobis rerum repudiandae?</p>
            <a href={address} target="_blank" className={styles['link-btn']}>Link</a>
=======
            <a href={address} target="_blank" rel="noopener noreferrer" className={styles['link-btn']}>Link</a>
>>>>>>> seungmin
        </li>
    )
}

export default Book;