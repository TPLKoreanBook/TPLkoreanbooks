import React, { useState, useRef } from 'react';
import styles from './BookList.module.css';
import axios from 'axios';
import useAsync from '../hooks/useAsync';
import Book from './Book.js';
import { useEffect } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { GiInfo } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';

import Loading from './Loading';
import Modal from './Modal';

async function getBooks(category, userInput) {
  const response = await axios.get(
    `https://tpl-server-heroku.herokuapp.com/${category}`
  );
  return response.data.filter((book) => book.title);
}

const BookList = ({ category, userInput }) => {
  const [state] = useAsync(() => getBooks(category), [category]);
  const { loading, data, error } = state;
  const [filteredData, setFilteredData] = useState([]);
  const [visible, setVisible] = useState(24);
  const [showToTop, setShowToTop] = useState(false);
  const [positionAbsolute, setPositionAbsolite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef);

  const toTopBtnHandler = () => {
    setShowToTop(window.pageYOffset > 50);
    setPositionAbsolite(
      document.body.offsetHeight - 95 <= window.pageYOffset + window.innerHeight
    );
  };
  function useOutsideClickHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowModal(false);
        }
      }
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    window.addEventListener('scroll', toTopBtnHandler);
  }, []);

  useEffect(() => {
    if (data) {
      if (!userInput) return setFilteredData(data);

      const filtered = data.filter(
        (book) =>
          book.title
            .replace(/\s/g, '')
            .includes(
              userInput.replace(/\s/g, '').substring(0, userInput.length)
            ) ||
          book.author
            .replace(/\s/g, '')
            .includes(
              userInput.replace(/\s/g, '').substring(0, userInput.length)
            )
      );
      return setFilteredData(filtered);
    }
    // console.log(userInput);
  }, [data, userInput]);

  const showMoreBooks = () => {
    setVisible((prev) => prev + 24);
    setPositionAbsolite(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const infoBtnHandler = () => {
    setShowModal((prev) => !prev);
  };

  // Error handling.
  if (loading) return <Loading />;
  if (error) return <div>Error</div>;
  if (!data) return null;

  return (
    <section className={styles['book-list']}>
      <div className={`wrapper ${styles['list-wrapper']}`}>
        {!filteredData.length && (
          <div className={styles['no-results']}>
            <BsSearch className={styles['no-search-icon']} />
            <h2>No results found</h2>
            <p>We couldn't find what you are looking for</p>
          </div>
        )}

        {filteredData.length > 0 && (
          <>
            <div className={styles['status-container']}>
              {/* <div
                className={`${showModal ? styles['modal-visible'] : ''} ${
                  styles['info-modal']
                }`}
              > */}
              <div className={styles['status-header']}>
                <h3>
                  Toronto Public Library 에 존재하는 한국 책들을 한국어 검색으로
                  손쉽게 찾으세요.
                  <div
                    ref={wrapperRef}
                    className={styles['status-header-modal']}
                  >
                    <button
                      onClick={infoBtnHandler}
                      className={styles['info-btn']}
                    >
                      <GiInfo />
                    </button>
                    <div
                      className={`${showModal ? styles['modal-visible'] : ''} ${
                        styles['info-modal']
                      }`}
                    >
                      {showModal && <Modal setShowModal={setShowModal} />}
                    </div>
                  </div>
                </h3>
              </div>
              {/* <p>
                토론토 공립도서관에 한국어 책이 4천권📚이나 있다는 사실 알고 계셨나요? <br />
                하지만 표지가 없고 제목이 영어로 변환돼 있어서 검색하기가 쉽지 않았죠😅 <br />
                이제 코뿔소🦏 라이브러리 기능을 통해 쉽고 간편하게 검색해보세요~🥰<br />
              </p>
              <p>
                자세한 이용 방법이 궁금하시다면 아래 유튜브 영상을 참고해주세요
              </p> */}
              {/* <a href="/">youtube link</a> */}

              {/* <p>1 - {filteredData.length} of {data.length} results</p> */}
              <p>
                {filteredData.length} results in {category}
              </p>
            </div>
            <ul className={styles['list-container']}>
              {filteredData.slice(0, visible).map((book, index) => (
                <Book
                  key={book.id}
                  cover={book.cover}
                  title={book.title}
                  author={book.author}
                  address={book.link}
                />
              ))}
            </ul>
            {filteredData.length > visible && (
              <button
                className={styles['showMore-btn']}
                onClick={showMoreBooks}
              >
                <HiChevronDown
                  size='30'
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    transform: 'translate(10px,-50%)',
                  }}
                />
                <span>More results</span>
              </button>
            )}
          </>
        )}

        <button
          onClick={scrollToTop}
          className={`${showToTop ? styles['toTop-btn-visible'] : ''} ${
            positionAbsolute ? styles['toTop-btn-positionAbsolute'] : ''
          } ${styles['toTop-btn']}`}
        >
          <HiChevronUp className={styles['topTop-btn-svg']} size='30' />
        </button>
      </div>
    </section>
  );
};

export default BookList;
