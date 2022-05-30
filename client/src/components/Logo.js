import React from 'react';
import style from './Logo.module.css';

function Logo() {
  return <div className={style['logo']}> 
    <img src="logo.png"/>
  </div>
}

export default Logo;