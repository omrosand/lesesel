import { Helmet } from "react-helmet";
import { writeClient } from "../utils/sanityclient";

const Settings = ({user, setUser}) => {
  function darkMode() {
    const element = document.body;

    element.classList.toggle("dark-mode");
  }

  const deleteUser = () => {
    const password = prompt("Vennligst oppgi passord for å slette din bruker.");
    if (!password) {
      console.log("Password input canceled, user not deleted.");
      return;
    }

    const confirmDelete = window.confirm;
    if (confirmDelete) {
      const query = '*[_type == "users" && _id == $userId][0]._id';
      const params = { userId: user._id };

      writeClient
        .fetch(query, params)
        .then((documentId) => {
          return writeClient.delete(documentId);
        })
        .then(() => {
          console.log(`Deleted user ${user._id}`);
          localStorage.removeItem("user");
          setUser(null);
          window.alert(
            "Brukeren din har blitt slettet. Du vil bli videresendt til innloggingssiden."
          );
          window.location.href = "/login";
        })
        .catch((error) => {
          console.error("Failed to delete user");
        });
    }
  };


  return (
    <>
      <Helmet>
        <title>Innstillinger</title>
      </Helmet>
      <article className="pageCard">
        <h1>Innstillinger</h1>
        <h2>Bytte språk?</h2>
        <p>
          Lesesel er både tilgjenglig på norsk og engelsk. Trykk på knappen
          under om du ønsker å bytte språk.
        </p>
        <button>Bytt språk</button>

        <h2>Bytte utseende?</h2>
        <p>
          Dersom det blir for lyse farger for deg, så kan du velge mørkere farge
          ved å trykke på knappen under.
        </p>
        <button onClick={darkMode}>Mørkt tema / Lyst tema</button>

        <h2>Slette bruker?</h2>
        <p>Når du har slettet brukeren din, er det ingen vei tilbake.</p>
        <button onClick={deleteUser}>Slett bruker</button>
      </article>
    </>
  );
};
export default Settings;
