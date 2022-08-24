import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles['loading']}>
      <div className={styles['loading-dots']}>
        <div className={styles['loading-dot-1']}></div>
        <div className={styles['loading-dot-2']}></div>
        <div className={styles['loading-dot-3']}></div>
      </div>
      <div className={styles['loading-text']}>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
