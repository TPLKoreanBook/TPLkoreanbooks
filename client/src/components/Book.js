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
            {/* <h4 className={styles['author']}>{author}</h4> */}
<<<<<<< HEAD:src/components/Book.js
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, nobis rerum repudiandae?</p>
            <a href={address} target="_blank" className={styles['link-btn']}>Link</a>
=======
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, nobis rerum repudiandae?</p> */}
            <a href={address} className={styles['link-btn']}>Link</a>
>>>>>>> 2aa6b0ef0887fdd19012c00293eebccfaa5d1d21:client/src/components/Book.js
        </li>
    )
}

export default Book;