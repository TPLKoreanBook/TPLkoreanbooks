import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header.js';
import Main from './components/Layout/Main.js';
import BookList from './components/BookList.js';
import Categories from './components/Categories';

function App() {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <Header>
        <Categories onCategory={setCategory} />
      </Header>

      <Main>

        <BookList
          category={category}
        />
      </Main>
      <footer>
      </footer>
    </div>
  )
};

export default App;
