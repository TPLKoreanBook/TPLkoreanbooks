import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <footer className={styles['footer-container']}>
            <ul className={styles['links-container']}>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Email</li>
            </ul>
            <p>©2022 Team Koppulso</p>
        </footer>
    )
};

export default Footer;