import React, { useState } from 'react';
import Header from './Pages/Header';
import Main from './Pages/Main.js';
import About from './Pages/About';
import BookList from './components/BookList.js';
import Categories from './components/Categories';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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
        <FeedbackForm />
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
