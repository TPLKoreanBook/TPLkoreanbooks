import React, { useState } from 'react';
import Header from './Pages/Header';
import Main from './Pages/Main.js';
import BookList from './components/BookList.js';
import Categories from './components/Categories';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <BrowserRouter>
      <div>
      <Route exact path="/en">
        <div>
          English Page
        </div>
      </Route>

      
        <Header
          onSearch={setSearchTerm}
        >
          <Categories
            onCategory={setCategory}
          />
        </Header>

        <Route exact path="/">
          <div > About page</div>
        </Route>

        <Route path="/book"> 
          <Main>

          <BookList
            category={category}
            userInput={searchTerm}
          />
          </Main>
        </Route>
        
        <footer>
        </footer>
      </div>
    </BrowserRouter>
  )
};

export default App;
