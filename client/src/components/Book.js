import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';
import NoBookImg from '../images/NoBookImg.png';
import styles from './Book.module.css';

function Book({ cover, title, address, author }) {
  const ellipsis = (title, maxLength) => {
    let shortenTitle = title;
    if (shortenTitle.length > maxLength) {
      shortenTitle = shortenTitle.substr(0, maxLength - 3) + '...';
    }
    return shortenTitle;
  };
  return (
    <li className={styles['book-container']}>
      <div className={styles['img-container']}>
        <LazyLoadImage
          width={'100%'}
          height={'100%'}
          // src={cover === NO_IMG_URL ? NoBookImg : cover}
          src={cover ? cover : NoBookImg}
          alt={title}
          placeholderSrc={process.env.PUBLIC_URL + '/Spinner-1s-200px.svg'}
        />
      </div>
      <div
        className={`${styles['description']} ${cover || styles['no-img']} ${
          styles['visible']
        }`}
      >
        {/* <div
          className={`${cover === NO_IMG_URL && styles['no-img']} ${styles['visible']
            }`}
        ></div> */}
        <h3 title={title} className={styles['booktitle']}>
          {ellipsis(title, 50)}
        </h3>
        <h4>{author}</h4>

        <IconContext.Provider value={{ className: `${styles['link-arrow']}` }}>
          <a
            href={address}
            target='_blank'
            rel='noopener noreferrer'
            className={styles['link-btn']}
          >
            <span>Link</span>
            <IoIosArrowForward />
          </a>
        </IconContext.Provider>
      </div>
    </li>
  );
}

export default Book;
