import BookList from './components/BookList'
import axios from 'axios';
import useAsync from './hooks/useAsync';
import './App.css';


async function getBooks() {
  // Got it working by throwing my tpl_json.json file into the Public folder and calling it by:
  const response = await axios.get('tpl_json.json');
  console.log(response.data['books']);
  return response.data;
}

function App() {
  const [state] = useAsync(getBooks, []);
  const { loading, data, error } = state;

  return (
    <div>
      <header>
        <h1>Hello</h1>
      </header>
      <main>
        <BookList
          loading={loading}
          data={data}
          error={error}
        />
      </main>
      <footer>

      </footer>
    </div>
  )
};

export default App;
