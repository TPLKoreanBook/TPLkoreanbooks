import React, { useState } from 'react';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main.js';
import About from './pages/Main/About/About';
import BookList from './pages/Main/LibraryPage/BookList';
import Footer from './pages/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <Router>
      <Header
        categoryName={category}
        onCategory={setCategory}
        onSearch={setSearchTerm}
      >
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
      <Footer />
    </Router>
  )
};

export default App;
