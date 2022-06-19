import React, { useState, useEffect } from 'react';
import { AnimatePresence, } from 'framer-motion';
import LoadingPage from './components/LoadingPage';
import Header from './Pages/Header';
import Main from './Pages/Main.js';
import About from './Pages/About';
import BookList from './components/BookList.js';
import Categories from './components/Categories';
import AnimatedPage from './components/AnimatedPage';
import {BrowserRouter as Router,Routes,Route,useLocation} from 'react-router-dom'

function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  // const currentUrl = useLocation() ;

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
    
      {/* {!isLoaded && !isAnimationEnd &&
        <AnimatedPage key="loading" type="loading" isAnimationEnd={setIsAnimationEnd}>
          <LoadingPage />
        </AnimatedPage>} */}
     
          
          <Header
            onSearch={setSearchTerm}
           
            
          >
            <Categories
              onCategory={setCategory}
              
              
            />
          </Header>
        <Routes >
        
          
            <Route path="/" element={<About />}/>
            <Route path="/book" element={ <BookList
              category={category}
              userInput={searchTerm}
            />}/>
            
          
        </Routes> 
          <footer>
          </footer>
       

    
  </Router> 
  )
};

export default App;
