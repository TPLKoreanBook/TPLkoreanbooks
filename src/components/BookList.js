import { useState, useEffect } from "react";


const BookList = () => {

    const [books, setBooks] = useState([])
    const getBooks = async () => {
        const json = await (
            await fetch(
                `https://raw.githubusercontent.com/TPLKoreanBook/TPLkoreanbooks/main/tpl_json.json`
            )
        ).json();

        setBooks(json.books[0]);

    };

    useEffect(() => {
        getBooks();
    }, [])
    return (
        <div>
            {
                books.map((book) =>
                    <h3>{book.title}</h3>)
            }
        </div>
    )
};

export default BookList;