import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImSpinner } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { client } from "../utils/sanityclient";
import { writeClient } from "../utils/sanityclient";

const SearchBar = ({ user, setUser }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState();
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addBookLoading, setAddBookLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const fetchData = (value) => {
    setLoading(true);
    fetch(
      `https://bibliografisk.bs.no/v1/publications?query=${value}&filter=type%3A(audiobook%20OR%20book)&limit=80`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data.records);
        setTotal(data.total);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleChange = (value) => {
    setInput(value);
  };

  const handleClick = (value) => {
    if (input === "") return;
    fetchData(value);
  };

  const getType = (type) => {
    if (type === "Book") return "Bok";
    if (type === "Audiobook") return "Lydbok";
  };

  const openModal = (book) => {
    setSelectedBook(book);
    console.log(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setCompleted(false);
  };
  const addBook = async (selectedBook) => {
    const title = selectedBook?.name;
    let pages = "50";
    if (selectedBook.numberOfPages) {
      pages = selectedBook?.numberOfPages.toString();
    }

    console.log(user);

    const newBook = {
      _key: Date.now().toString(),
      _type: "books",
      title,
      pages,
    };
    try {
      if (!user.books) {
        user.books = [];
      }
      const updatedUser = await writeClient
        .patch(user._id)
        .set({
          books: [...user.books, newBook],
        })
        .commit();

      const response = await client.fetch(
        `*[_type == "users" && _id == "${user._id}"][0]{
          _id,
        username, 
        avatar {
          asset-> {
            url
          }
        },
        books
      }`
      );
      console.log(response);
      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
        setUser(response);
      }
      console.log("User updated:", updatedUser);
      setAddBookLoading(false);
      setCompleted(true);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="inputWrapper">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="searchField"
          placeholder="Søk på tittel, forfatter, ISBN..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          className="searchButton"
          type="submit"
          onClick={(e) => handleClick(input)}
        >
          Søk
        </button>
      </form>
      <h3 className="resultsH3">{total} treff på søk:</h3>
      {loading ? (
        <>
          <h4>Henter bøker...</h4>
          <ImSpinner className="loadingSpinner" />
        </>
      ) : (
        <ul className="results">
          {result.map((book) => (
            <li key={book.id} onClick={() => openModal(book)}>
              <img
                src={
                  book.image
                    ? book.image.thumbnailUrl
                    : "/src/assets/placeholder.jpg"
                }
                alt="placeholder"
              />
              <h2 className="title">{book.name}</h2>
              <p>
                {getType(book["@type"]).toUpperCase()}
                {book.audience[0] ? " | " + book.audience[0].name : null}
              </p>
            </li>
          ))}
        </ul>
      )}
      {selectedBook && (
        <div className="modal" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={closeModal}>
              <AiOutlineCloseCircle />
            </button>
            <img
              src={
                selectedBook.image
                  ? selectedBook.image.url
                  : "/src/assets/placeholder.jpg"
              }
              alt="placeholder"
            />
            <h2 className="title">{selectedBook.name}</h2>
            <table className="bookInfo">
              <tbody>
                <tr>
                  <th>ISBN: </th>
                  <td>{selectedBook.isbn}</td>
                </tr>
                <tr>
                  <th>Sider: </th>
                  <td>
                    {selectedBook.numberOfPages
                      ? selectedBook.numberOfPages
                      : "Finner ikke sideantall"}
                  </td>
                </tr>
                <tr>
                  <th>Sjanger: </th>
                  <td>
                    {selectedBook.literaryForm
                      ? selectedBook.literaryForm
                      : "Finner ikke sjanger"}
                  </td>
                </tr>
              </tbody>
            </table>
            <p>{selectedBook.description}</p>
            {user ? (
              !completed && (
                <button
                  className="addBookBtn"
                  onClick={() => {
                    setAddBookLoading(true);
                    addBook(selectedBook);
                  }}
                  disabled={loading}
                >
                  {addBookLoading ? (
                    <ImSpinner className="loadingSpinner" />
                  ) : (
                    "Jeg har lest!"
                  )}
                </button>
              )
            ) : (
              <p className="loginReminder">
                Logg inn <Link to="/login">her</Link> for å legge til bøker!
              </p>
            )}

            {completed && (
              <section className="bookAddedText">
                <p>Boken er lagt til!</p>
                <AiOutlineCheckCircle className="check" />
              </section>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
