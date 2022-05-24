import { useState } from 'react';
import BookList from './components/BookList.js';
import Categories from './components/Categories';
import Logo from './components/Logo';


import './App.css';



function App() {
  const [category, setCategory] = useState('');

  return (
    <div>
      <header>
      <Logo />
      </header>
      <main>
        <Categories onCategory={setCategory} />

        <BookList
          category={category}
        />
      </main>
      <footer>

      </footer>
    </div>
  )
};

export default App;
