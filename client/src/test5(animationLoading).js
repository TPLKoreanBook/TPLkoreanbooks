import React, { useState, useEffect } from 'react';
import { AnimatePresence, } from 'framer-motion';
import LoadingPage from './components/LoadingPage';
import Header from './Pages/Header';
import Main from './Pages/Main.js';
import About from './Pages/About';
import BookList from './components/BookList.js';
import Categories from './components/Categories';
import AnimatedPage from './components/AnimatedPage';
import FeedbackForm from './components/FeedbackForm';

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
                </AnimatedPage>}

        </AnimatePresence>
    )
};

export default App;
