import { Link } from "react-router-dom";

const MyBooks = () => {
  return (
    <>
      <h1>Mine Bøker</h1>
      <section>
        <ul className="cardList">
          <li className="card">
            <Link to="/registrerbok">Registrer bok</Link>
          </li>
          <li className="card">Leste bøker</li>
          <li className="card">Ønsker å lese</li>
        </ul>
      </section>
    </>
  );
};
export default MyBooks;
