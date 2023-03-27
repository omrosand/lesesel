import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState();

  const fetchData = (value) => {
    fetch(
      `https://bibliografisk.bs.no/v1/publications?query=${value}&&limit=50`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data.records);
        setTotal(data.total);
        console.log(data.records);
      });
  };

  const handleChange = (value) => {
    setInput(value);
  };
  const handleClick = (value) => {
    fetchData(value);
  };
  const getType = (type) => {
    if (type === "Book") return "Bok";
    if (type === "VideoGame") return "Spill";
    if (type === "Movie") return "Film";
    if (type === "Audiobook") return "Lydbok";
  };

  return (
    <div className="inputWrapper">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Skriv her..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleClick(input)}>
          Søk
        </button>
      </form>
      <h3>{total} treff på søk:</h3>
      <ul className="results">
        {result.map((book) => (
          <li key={book.id}>
            <img src={book.image?.thumbnailUrl} alt="placeholder" />
            <h2 className="title">{book.name}</h2>
            <p>{getType(book["@type"])}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchBar;
