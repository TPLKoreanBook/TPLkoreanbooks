import './App.css';

import { useState, useEffect, } from "react";


function App() {
  
  const [books,setBooks] = useState([])
  const getBooks = async () => {
    const json = await (
      await fetch(
        `https://raw.githubusercontent.com/TPLKoreanBook/TPLkoreanbooks/main/tpl_json.json`
      )
    ).json();
    
    setBooks(json.books[0])
     
      };

    useEffect(()=> {
      getBooks();
    },[])  
    
    

  return (
<<<<<<< HEAD
    <div className="App">
      <h1>hello</h1>
      <h2>xxxxxx</h2>
      <h3>yyyyyy</h3>
      <h3>zzzzzzzzz</h3>
      <h5>test</h5>
    </div>
=======
   <div>
    {books.map((book)=> 
    
    <h3>{book.title}</h3>)}

   </div>
>>>>>>> sejun
  );
};

export default App;

