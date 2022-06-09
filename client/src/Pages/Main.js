import styles from './Main.module.css';
import React from 'react';

const Main = (props) => {
    return (
        <main className={`wrapper ${styles['main-container']}`}>
            {props.children}
        </main>
    )
};

export default Main;