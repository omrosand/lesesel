import { Link } from "react-router-dom";
import trophies from "../utils/trophies";

const NavScoreboard = ({ user, trophy, activePath, setActivePath }) => {
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
        <section className="avatarTextSection">
          <section className="imgSection">
            <Link
              to="/minprofil"
              onClick={() => setActivePath("/minprofil")}
              className={"/minprofil" === activePath ? "active" : ""}
            >
              <img src={user?.avatar?.asset?.url} />
            </Link>
          </section>

          <section className="textSection">
            <Link
              to="/minprofil"
              onClick={() => setActivePath("/minprofil")}
              className={"/minprofil" === activePath ? "active" : ""}
            >
              <p className="username">{user?.username}</p>
            </Link>
            <table className="navScoreTable">
              <tbody>
                <tr>
                  <th>Poengscore:</th>
                  <td>{sumScore()}</td>
                </tr>
                <tr>
                  <th>Trofeer:</th>
                  <td>{sumTrophies()}</td>
                </tr>
              </tbody>
            </table>
          </section>
          </section> 

          <section className="imgSection">
            {trophy === "" ? (
              <Link
                to="/minprofil"
                onClick={() => setActivePath("/minprofil")}
                className={"/minprofil" === activePath ? "active" : ""}
              >
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
