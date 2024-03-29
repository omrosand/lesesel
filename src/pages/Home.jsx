import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import WeeklyRecommendation from "../components/WeeklyRecommendation";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Velkommen til Lesesel</title>
        <link rel="icon" href="favicon.ico" />
      </Helmet>
      <ul className="homeCardList">
        <li className="homeCard">
          <img src="/src/img/Sel11.webp" alt="sel med briller som holder bok" />
          <article>
            <h2>Velkommen til Lesesel!</h2>
            <p>
              Hos Lesesel kan du tjene poeng ved å lese bøker eller høre på
              lydbøker, dele hva du leser og konkurrere med venner!
            </p>
            <p>
              Start reisen med Lesesel ved å registrere din første bok ved å
              trykke på knappen under!
            </p>
            <button>
              <Link to="/registrerbok" className="homeLink">
                Registrer bok
              </Link>
            </button>
          </article>
        </li>

        <li className="weeklyRecommendation">
          <h2 className="weeklyBookTag">Ukens anbefaling</h2>
          <WeeklyRecommendation />
        </li>

        <li className="homeCard">
          <img src="/src/img/Sel7.webp" alt="sel med solbriller" />
          <article>
            <h2>Sjekk scoreboard</h2>
            <p>
              Hvor mye har vennene dine lest? Hvor ligger du på scoreboard? Er
              du på pallen? <br />
              Dette kan du sjekke her.
            </p>
            <button>
              <Link to="/scoreboard" className="homeLink">
                Gå til scoreboard
              </Link>
            </button>
          </article>
        </li>
        <li className="homeCard">
          <img src="/src/img/Sel6.webp" alt="sel med sjokkert ansikt" />
          <article>
            <h2>Favoritter</h2>
            <p>
              Har du funnet en bok du liker? Da kan du legge den til i en
              liste med dine favoritter. Trykk på knappen under for å se hvilke
              bøker du har favorisert.
            </p>
            <button>
              <Link to="/favoritter" className="homeLink">
                Favoritter
              </Link>
            </button>
          </article>
        </li>
      </ul>
    </>
  );
};
export default Home;
