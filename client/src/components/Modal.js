import styles from './Modal.module.css';
import { HiOutlineX } from 'react-icons/hi';

const Modal = ({ setShowModal }) => {
  const onClickHandler = () => {
    setShowModal(false);
  };
  return (
    <div className={styles['modal']}>
      <button className={styles['modal-btn']} onClick={onClickHandler}>
        <HiOutlineX />
      </button>
      <p className={styles['modal-content']}>
        토론토 공립도서관에 한국어 책이 4천권📚이나 있다는 사실 알고 계셨나요?{' '}
        <br />
        하지만 표지가 없고 제목이 영어로 변환돼 있어서 검색하기가 쉽지 않았죠😅{' '}
        <br />
        이제 코뿔소🦏 라이브러리 기능을 통해 쉽고 간편하게 검색해보세요~🥰
        <br />
        자세한 이용 방법이 궁금하시다면 아래 유튜브 영상을 참고해주세요
        <br />
        <a href='/'>youtube link</a> 바로가기
      </p>
    </div>
  );
};

export default Modal;
