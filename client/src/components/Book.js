import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './Book.module.css';


function Book({ cover, title, address, author }) {
    return (
        <li className={styles['book-container']}>
            <div className={styles['img-container']}>
                <LazyLoadImage
                    effect="blur"
                    height="400px"
                    src={cover}
                    alt={title}
                />
            </div>
            <h3 className={styles['booktitle']} >{title}</h3>
            <h4>{author}</h4>
            <a href={address} target="_blank" rel="noopener noreferrer" className={styles['link-btn']}>Link</a>
        </li>
    )
}

export default Book;