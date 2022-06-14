import React, { useState, useEffect } from 'react';
import Header from './Pages/Header';
import Main from './Pages/Main.js';
import About from './Pages/About';
import BookList from './components/BookList.js';
import Categories from './components/Categories';

function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const loadingHandler = () => {
      setIsLoaded(true);
    }
    console.log('ddd')

    window.addEventListener('load', loadingHandler);

    return () => {
      window.removeEventListener('load', loadingHandler);

    }
  }, [])
  if (!isLoaded) return <div>Loading...</div>
  return (
    <div>
      <Header
        onSearch={setSearchTerm}
      >
        <Categories
          onCategory={setCategory}
        />
      </Header>

      <Main>
        <About />

        <BookList
          category={category}
          userInput={searchTerm}
        />
      </Main>
      <footer>
      </footer>
    </div>
  )
};

export default App;
