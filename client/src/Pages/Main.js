import styles from './Main.module.css';

const Main = (props) => {
    return (
        <main className={styles['main-container']}>
            {props.children}
        </main>
    )
};

export default Main;