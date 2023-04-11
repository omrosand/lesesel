import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Hjem</h1>
      <ul children="homeCardList">
        <li className="homeCard">
          <img src="/src/img/book.jpg" />
          <article>
            <h3>Velkommen til Lesesel!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus ipsum in pulvinar ultricies. Donec dignissim massa sem, non
              placerat mauris elementum ac. Praesent pharetra fermentum enim
              vitae tempus. Ut maximus nisl vitae rhoncus ultricies.
            </p>
            <button>
              <Link to="/registrerbok">Registrer bok</Link>
            </button>
          </article>
        </li>

        <li className="homeCard">
          <img src="/src/img/book.jpg" />
          <article>
            <h3>Sjekk scoreboard</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus ipsum in pulvinar ultricies. Donec dignissim massa sem, non
              placerat mauris elementum ac. Praesent pharetra fermentum enim
              vitae tempus. Ut maximus nisl vitae rhoncus ultricies.
            </p>
            <button>
              <Link to="/scoreboard">Gå til scoreboard</Link>
            </button>
          </article>
        </li>
      </ul>
    </>
  );
};
export default Home;
