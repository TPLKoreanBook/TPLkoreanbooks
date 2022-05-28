import { useState, useEffect } from 'react';
import BookList from './components/BookList.js';
import Categories from './components/Categories';
import Logo from './components/Logo';


import './App.css';



function App() {
  const [category, setCategory] = useState('all');

  /////// From here ///////

  // const [data, setData] = useState([{}]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/category/청소년").then(
  //     res => res.json()
  //   )
  //     .then(data => {
  //       setData(data)
  //     });

  // }, []);
  // console.log(data);

  /////// To here ///////////////
  return (
    <div>
      <header>
        <Logo />

      </header>
      <main>
        <Categories onCategory={setCategory} />

        <BookList
          category={category}
        />
      </main>
      <footer>

      </footer>
    </div>
  )
};

export default App;
