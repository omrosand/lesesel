import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyBooks = () => {
  return (
    <>
      <Helmet>
        <title>Mine bøker</title>
      </Helmet>
      <section>
        <ul className="cardList">
          <li className="card">
            <img src="../src/img/Sel11.webp" alt="sel med briller som holder bok" />
            <button>
              <Link to="/registrerbok">Registrer bok</Link>
            </button>
          </li>
          <li className="card">
            <img src="../src/img/Sel12.webp" alt="sel som blunker og strekker ut armene" />
            <button>
              <Link to="/lesteboker">Leste bøker</Link>
            </button>
          </li>
          <li className="card">
            <img src="../src/img/Sel6.webp" alt="sel med sjokkert ansikt" />

            <button>
              <Link to="/favoritter">Favoritter</Link>
            </button>
          </li>
        </ul>
      </section>
    </>
  );
};
export default MyBooks;
