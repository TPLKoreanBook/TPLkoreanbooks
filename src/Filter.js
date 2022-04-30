import { useState } from "react";
import "./Filter.css";

var tpl_json_t = require("./tpl_json_SortedByTitle.json");
var books_t = tpl_json_t["books"];

var tpl_json_a = require("./tpl_json_SortedByAuthor.json");
var books_a = tpl_json_a["books"];

function Print(list) {
  return (
    <li>
      {list["title"]} / {list["author"]}
    </li>
  );
}

function Btn({ text, changeValue }) {
  return (
    <button
      onClick={changeValue}
      style={{
        padding: "10px, 20px",
        border: 0,
        borderRadius: 10,
        top: "40%",
        left: "10%",
        width: "100px",
        height: "40px;",
        position: "relative",
        backgroundColor: "orange",
      }}
    >
      {text}
    </button>
  );
}

function Filter() {
    const [value, setValue] = useState(books_a);
    const changeValue = () => {
        if (value = books_t) {
            setValue(books_a)
        } { setValue(books_t)}
    }
  return (
    <div className="Filter">
      <Btn text="제목 정렬" changeValue={changeValue} />
      <Btn text="저자 정렬" changeValue={changeValue} />
      {value.map((item) => (
    <li>
      {item["title"]} / {item["author"]}
    </li>
  ))}
    </div>
  );
}

export default Filter;
