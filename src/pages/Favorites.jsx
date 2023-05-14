import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <>
      <Helmet>
        <title>Mine favoritter</title>
      </Helmet>
      <article className="pageCard">
        <h1>Favoritter</h1>
        <p>
          Du har ikke lagt til noen favoritter enda. Gå til{" "}
          <Link to="/registrerbok">Registrer</Link> siden for å søke og legge
          til bøker i dine favoritter.
        </p>
      </article>
    </>
  );
};
export default Favorites;
