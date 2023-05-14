import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Scoreboard = () => {
  return (
    <>
      <Helmet>
        <title>Scoreboard</title>
      </Helmet>
      <article className="pageCard">
        <h1>Scoreboard</h1>
        <p>
          <Link to="/venner">Legg til venner her</Link> for å sammenligne din
          score med andre venner på scoreboard.
        </p>
      </article>
    </>
  );
};

export default Scoreboard;
