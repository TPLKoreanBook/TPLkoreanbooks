import React, { useState } from 'react';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main.js';
import About from './Pages/Main/About';
import BookList from './components/BookList.js';
import Categories from './components/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <Router>

      <Header
        onSearch={setSearchTerm}
        categoryName={category}
      >
        <Categories
          onCategory={setCategory}
        />
      </Header>

      <Main>
        <Routes >
          <Route path="/" exact element={<About />} />
          <Route path="/book" element={<BookList
            category={category}
            userInput={searchTerm}
          />} />
        </Routes>
      </Main>
      <footer>
      </footer>



    </Router>
  )
};

export default App;
