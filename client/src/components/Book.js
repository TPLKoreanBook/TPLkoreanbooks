import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';
import NoBookImg from '../images/NoBookImg.png';
import styles from './Book.module.css';

// const NO_IMG_URL = 'https://image.aladin.co.kr/img/shop/2018/img_no.jpg';

function Book({ cover, title, address, author }) {

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
      <div className={styles['description']}>
        <div
          className={`${!cover && styles['no-img']} ${styles['visible']
            }`}
        >
          {/* <div
          className={`${cover === NO_IMG_URL && styles['no-img']} ${styles['visible']
            }`}
        ></div> */}
          <h3 title={title} className={styles['booktitle']}>
            {title}
          </h3>
          <h4>{author}</h4>
        </div>
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
