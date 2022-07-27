import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import styles from './Book.module.css';


function Book({ cover, title, address, author }) {

    return (
        <li className={styles['book-container']}>
            <div className={styles['img-container']}>
                {/* <img src={cover} alt={title} /> */}
                <LazyLoadImage
                    width={"100%"}
                    height={"100%"}
                    src={cover}
                    alt={title}
                    placeholderSrc={process.env.PUBLIC_URL + '/Spinner-1s-200px.svg'}
                />
            </div>
            <div className={styles['description']}>
                <h3 title={title} className={styles['booktitle']} >{title}</h3>
                <h4>{author}</h4>
                <IconContext.Provider value={{ className: `${styles['link-arrow']}` }}>
                    <a href={address} target="_blank" rel="noopener noreferrer" className={styles['link-btn']}>
                        <span>Link</span>
                        <AiOutlineArrowRight />
                    </a>
                </IconContext.Provider>
            </div>
        </li>
    )
}

export default Book;