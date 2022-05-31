import React, { useState, useEffect } from 'react';
import BookList from './components/BookList.js';
import Categories from './components/Categories';


import './App.css';



function App() {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <header>

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
