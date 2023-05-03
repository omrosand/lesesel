import { Link } from "react-router-dom";

const NavScoreboard = ({ user }) => {
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
          </section>

          <section className="trophySection">
            <p>Trofeer:</p>
            <ul>
              <li></li>
            </ul>
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
