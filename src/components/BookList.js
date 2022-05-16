import { useState } from 'react';
import Categories from './Categories';
import style from './BookList.module.css'

const BookList = ({ loading, error, data }) => {
    const [visible, setVisible] = useState(5);
    const [userSearch, setUserSearch] = useState('')
    const showMoreBooks = () => {
        setVisible((prev) => prev + 5)
    }

    const showLessBooks = () => {
        setVisible((prev) => prev - 5)
    }

    const searchHandler = (e) => {
        const userInput = e.target.value;
        setUserSearch(userInput)
    }
    console.log(data);
    // Error handling.
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    if (!data) return null

    return (
        <section className={style['book-list']}>
            <Categories />
            <div>
                <input type="text" placeholder='Search...' onChange={searchHandler} />
                <ul className={style['list-container']}>
                    {/* Test filtering */}
                    {data.books[0].filter((book) => {
                        if (userSearch === '') {
                            return book;
                        } else if (book.title.includes(userSearch)) {
                            return book;
                        }
                    }).slice(0, visible).map((book, index) => (
                        // This part can be List component
                        <li key={book.count_number} >
                            <h3>Title: {book.title}</h3>
                            <div className={style.img}></div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facilis veritatis voluptatibus minima reprehenderit temporibus velit, impedit, numquam nemo modi recusandae atque quod mollitia culpa iusto voluptas, nobis rerum repudiandae?</p>
                            <button>link</button>
                            {/* <p>Description: ???</p> */}
                        </li>
                    ))}
                </ul>
                <button onClick={showMoreBooks}>Show More!</button>
                <button onClick={showLessBooks}>Show Less!</button>
            </div>
        </section>
    )
};

export default BookList;