import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Velkommen til Lesesel</title>
    </Helmet>
      <h1>Hjem</h1>
      <ul children="homeCardList">
        <li className="homeCard">
          <img src="/src/img/Sel11.png" alt="sel med bok"/>
          <article>
            <h2>Velkommen til Lesesel!</h2>
            <p>
              Er du glad i å lese? Da har du kommet til det rette stedet! 
              Hos Lesesel kan du tjene poeng ved å lese bøker eller høre på lydbøker,
              del hva du leser og konkurrer med venner!  
            </p>
            <p>
              Start reisen med å registrer din først bok ved å trykke på knappen under!   
            </p>
            <button>
              <Link to="/registrerbok" className="homeLink">
                Registrer bok
              </Link>
            </button>
          </article>
        </li>

        <li className="homeCard">
          <img src="/src/img/Sel7.png" alt="sel med solbriller" />
          <article>
            <h2>Sjekk scoreboard</h2>
            <p>
              Hvor mye har vennene dine lest? Hvor ligger du på scoreboard? Er du på pallen?  <br/>
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
          <img src="/src/img/Sel6.png" alt="sel med sjokkert ansikt" />
          <article>
            <h2>Ønsker å lese</h2>
            <p>
              Har du funnet en bok du ønsker å lese, men du kan ikke begynne på den akkurat nå? 
              Hva med å lagre bøkene i en liste, slik at når du er klar, kan du bare gå inn på listen å se hvilke bøker du har lagret. <br/>
              På den måten glemmer du ikke hvilke bøker du har vært interessert i. 
            </p>
            <button>
              <Link to="/scoreboard" className="homeLink">
                Ønsker å lese
              </Link>
            </button>
          </article>
        </li>
      </ul>
    </>
  );
};
export default Home;
