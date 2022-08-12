import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <ul className={styles['links-container']}>
        <li>
          <a
            href='https://www.facebook.com/groups/574395650831958/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/koppulso_official/?igshid=YmMyMTA2M2Y%3D'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href='mailto:koppulso.toronto@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Email
          </a>
        </li>
      </ul>
      <p>©2022 Team Koppulso</p>
    </footer>
  );
};

export default Footer;
