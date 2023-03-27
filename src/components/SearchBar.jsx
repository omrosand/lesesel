import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = (value) => {
    fetch(
      `https://bibliografisk.bs.no/v1/publications?query=${value}&&limit=50`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data.records);
        console.log(data.records);
      });
  };

  const handleChange = (value) => {
    setInput(value);
  };
  const handleClick = (value) => {
    fetchData(value);
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
      <ul className="results">
        {result.map((book) => (
          <li key={book.id}>
            <img src={book.image?.thumbnailUrl} alt="placeholder" />
            <h2>{book.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchBar;
