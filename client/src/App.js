import React, { useState, useEffect } from 'react';
import { AnimatePresence, } from 'framer-motion';
import LoadingPage from './components/LoadingPage';
import Header from './Pages/Header';
import Main from './Pages/Main.js';
import About from './Pages/About';
import BookList from './components/BookList.js';
import Categories from './components/Categories';
import AnimatedPage from './components/AnimatedPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  useEffect(() => {
    const loadingHandler = () => {
      setIsLoaded(true);
    }

    window.addEventListener('load', loadingHandler);
    // const timer = setTimeout(() => {
    //   setIsLoaded(true);
    // }, 3000)

    return () => {
      // clearTimeout(timer);
      window.removeEventListener('load', loadingHandler);
    }
  }, []);


  return (
   <Router>
    <AnimatePresence exitBeforeEnter>
      {!isLoaded && !isAnimationEnd &&
        <AnimatedPage key="loading" type="loading" isAnimationEnd={setIsAnimationEnd}>
          <LoadingPage />
        </AnimatedPage>}
      {isLoaded && isAnimationEnd &&
        <AnimatedPage key="main" type="main" isAnimationEnd={setIsAnimationEnd}>
          
          <Header
            onSearch={setSearchTerm}
          >
            <Categories
              onCategory={setCategory}
            />
          </Header>
        <Routes>
          <Main>
            <Route path="/about" element={<About />}/>
            <Route path="/book" element={ <BookList
              category={category}
              userInput={searchTerm}
            />}/>
            
          </Main>
        </Routes> 
          <footer>
          </footer>
        </AnimatedPage>}

    </AnimatePresence>
  </Router> 
  )
};

export default App;
