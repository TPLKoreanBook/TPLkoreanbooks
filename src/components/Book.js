import React from 'react';
import style from './Book.module.css';


function Book({ cover, title }) {
    return (
        <li >
            <div className={style.img}>
                <img src={cover} alt="" />
            </div>
            <h4 className={style['booktitle']} >{title}</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, nobis rerum repudiandae?</p>
            <button className={style['link-btn']}>Link</button>
        </li>
    )
}

export default Book;