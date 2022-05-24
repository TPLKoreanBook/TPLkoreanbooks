import React from 'react';
import style from './Book.module.css';
import * as BookList from './BookList';

function Book() {
  return 
    {/* Test filtering */}
                    {/* Filtered by users' selected category */}
                    {data.filter((book) => {
                        if (category === '' || category === 'All') return book;
                        else {
                            return book.category === category;
                        }
                    })
                        // After being filtered by the user's selected category, It will be filtered by the user's search input.
                        .filter((book) => {
                            if (book.title.includes(searchTerm.substring(0, searchTerm.length))) {
                                return book;
                            }
                        }).slice(0, visible).map((book, index) => (
                            // This part can be List component
                            <li key={book.count_number} >
                                
                                <div className={style.img}>
                                    <img src={book.cover} />
                                </div>
                                <h4 className={style['booktitle']} >{book.title}</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, nobis rerum repudiandae?</p>
                                <button className={style['link-btn']}>Link</button>
                            </li>
                            // <Book />
                        ))}
}

export default Book;