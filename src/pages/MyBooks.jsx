import { Link } from "react-router-dom";

const MyBooks = () => {
  return (
    <>
      <h1>Mine Bøker</h1>
      <section>
        <ul className="cardList">
          <li className="card">
            <img src="../src/img/Sel11.png" />
            <button>
              <Link to="/registrerbok">Registrer bok</Link>
            </button>
          </li>
          <li className="card">
            <img src="../src/img/Sel12.png" />
            <button>Leste bøker</button>
          </li>
          <li className="card">
            <img src="../src/img/Sel6.png" />
            <button>Ønsker å lese</button>
          </li>
        </ul>
      </section>
    </>
  );
};
export default MyBooks;
