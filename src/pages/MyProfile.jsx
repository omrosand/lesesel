import { Helmet } from "react-helmet";
import Trophy from "../components/Trophy";

const MyProfile = ({ user, setTrophy, trophy }) => {
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
    <>
      <article className="pageCard">
        <Helmet>
          <title>Min profil</title>
        </Helmet>
        {user && (
          <>
            <img
              className="avatar"
              src={user?.avatar?.asset?.url}
              alt="Avatar"
            />
            <h2>{user?.username}'s profil</h2>

            <h3>Min poengscore</h3>
            <p>{sumScore()}</p>

            <h3>Mine trofeer</h3>
            <p>Trykk på det opplåste troféet du sette som favoritt.</p>
            <Trophy user={user} setTrophy={setTrophy} trophy={trophy} />
          </>
        )}
      </article>
    </>
  );
};
export default MyProfile;
