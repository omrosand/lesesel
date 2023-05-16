import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../utils/sanityclient";

const Favorites = ({ user }) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await client.fetch(
          `*[_type == "users" && _id == "${user._id}"][0]{
            favoriteBooks
          }`
        );
        if (response) {
          setFavoriteBooks(response.favoriteBooks || []);
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if (user) {
      fetchFavorites();
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Mine favoritter</title>
      </Helmet>
      <article className="pageCard">
        <h1>Favoritter</h1>
        {favoriteBooks.length > 0 ? (
          <ul className="favoriteBooks">
            {favoriteBooks.map((book) => (
              <li key={book._key}>
                <img
                  src={
                    book.image
                      ? book.image.thumbnailUrl
                      : "/src/assets/placeholder.jpg"
                  }
                  alt="Bokens omslag"
                />
                <p>{book.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            Du har ikke lagt til noen favoritter enda. Gå til{" "}
            <Link to="/registrerbok">Registrer</Link> siden for å søke og legge
            til bøker i dine favoritter.
          </p>
        )}
      </article>
    </>
  );
};

export default Favorites;
