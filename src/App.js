import { useState } from 'react';
import BookList from './components/BookList.js';
import Categories from './components/Categories';


import './App.css';



function App() {
  const [category, setCategory] = useState('');

  return (
    <div>
      <header>
        <h1>Hello</h1>
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
