import './App.css';


const book = require("./tpl_json.json")
console.log(book)
const books = book["books"]
function App() {
  return (
    // {books.map((item) => {
    //   <li>{item.title}</li>
    // })}
  )
}

export default App;
