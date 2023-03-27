import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`https://bibliografisk.bs.no/v1/publications?query=${value}`, {
      method: "GET",
      headers: {
        "User-Agent": "Høgskolen i Østfold Bachelorgruppe",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="inputWrapper">
      <input
        placeholder="Skriv her..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
