import { Link } from "react-router-dom";
import trophies from "../utils/trophies";

const NavScoreboard = ({ user, trophy }) => {
  const sumScore = () => {
    if (user?.books?.length > 0) {
      let score = 0;
      user.books.forEach((book) => {
        if (book.pages) {
          score += parseInt(book.pages);
        }
      });
      return score;
    }
  };
  const sumTrophies = () => {
    let unlockedCount = 0;
    trophies.map((trophy) => {
      if (trophy.condition(user) === true) {
        unlockedCount++;
      }
      return unlockedCount;
    });
    return unlockedCount;
  };

  return (
    <article className="navScoreboard">
      {user ? (
        <>
          <section className="imgSection">
            <img src={user?.avatar?.asset?.url} />
          </section>

          <section>
            <p className="username">{user?.username}</p>
            <p>Poengscore: {sumScore()}</p>
            <p>Trofeer: {sumTrophies()}</p>
          </section>

          <section className="imgSection">
            {trophy === "" ? (
              <Link to="/minprofil">
                <button>Velg favoritt trofé</button>
              </Link>
            ) : (
              <img
                src={trophy}
                alt="favoritt trofé"
                className="trophyThumbnail"
              />
            )}
          </section>
        </>
      ) : (
        <p>
          Logg inn <Link to="/login">her</Link> for å bruke Lesesel
        </p>
      )}
    </article>
  );
};

export default NavScoreboard;
