import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Categories from './Categories';
import styles from './SearchForm.module.css';
import { HiSearch, HiChevronDown } from 'react-icons/hi';

const categoryHash = {
  all: '통합검색',
  children: '어린이',
  youngadult: '청소년',
  parenting: '좋은부모',
  novelpoetryplay: '소설/시/희곡',
  essay: '에세이',
  humanities: '인문학',
  sociology: '사회과학',
  history: '역사',
  science: '과학',
  artculture: '예술/대중문화',
  religion: '종교/역학',
  economy: '경제경영',
  selfhelp: '자기계발',
  foreignlanguage: '외국어',
  homecookbeauty: '가정/요리/뷰티',
  healthleisure: '건강/취미/레저',
  etc: '기타',
};

const SearchForm = ({ categoryName, onSearch, onCategory }) => {
  const [toggleCategory, setToggleCategory] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef);

  function useOutsideClickHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleCategory(false);
        }
      }
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [ref]);
  }
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setToggleCategory(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    setToggleCategory(false);
  }, [categoryName]);
  const categoryHandler = () => {
    setToggleCategory((prev) => !prev);
  };
  const subbmitHandler = (e) => e.preventDefault();
  const searchHandler = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div ref={wrapperRef} className={styles['search-container']}>
      <div className={styles['input-container']}>
        <button className={styles['category-btn']} onClick={categoryHandler}>
          <p>{categoryHash[categoryName]}</p>
          <HiChevronDown />
        </button>
        <div className={styles['border']}></div>
        <form onSubmit={subbmitHandler}>
          <input
            className={styles['searchbar']}
            type='text'
            onChange={searchHandler}
          />
        </form>

        <HiSearch
          size='25'
          style={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translate(-9px, -50%)',
          }}
        />
      </div>
      <div className={styles['dropdown-menu']}>
        {toggleCategory && (
          <Categories
            onCategory={onCategory}
            setToggleCategory={setToggleCategory}
          />
        )}
      </div>
    </div>
  );
};

export default SearchForm;
