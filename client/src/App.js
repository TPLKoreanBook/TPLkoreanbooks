import React, { useState } from 'react';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main.js';
import About from './Pages/Main/About';
import BookList from './components/BookList.js';
import Footer from './Pages/Footer/Footer';
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
