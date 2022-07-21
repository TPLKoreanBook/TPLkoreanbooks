import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './Book.module.css';


function Book({ cover, title, address, author }) {

    return (
        <li className={styles['book-container']}>
            <div className={styles['img-container']}>
                {/* <img src={cover} alt={title} /> */}
                <LazyLoadImage
                    height="300px"
                    src={cover}
                    alt={title}
                    placeholderSrc={process.env.PUBLIC_URL + '/Spinner-1s-200px.svg'}
                />
            </div>
            <div className={styles['description']}>
                <h3 title={title} className={styles['booktitle']} >{title}</h3>
                <h4>{author}</h4>
                <a href={address} target="_blank" rel="noopener noreferrer" className={styles['link-btn']}>Link</a>
            </div>
        </li>
    )
}

export default Book;