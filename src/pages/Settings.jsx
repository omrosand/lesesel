import { Helmet } from "react-helmet";

const Settings = () => {
  function darkMode() {
    const element = document.body;

    element.classList.toggle("dark-mode");
  }
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
        <button>Slett bruker</button>
      </article>
    </>
  );
};
export default Settings;
