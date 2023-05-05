import SearchBar from "../components/SearchBar";
import { Helmet } from "react-helmet";

const RegisterBook = ({ user, setUser }) => {
  return (
    <>
      <Helmet>
        <title>Registrer bøker</title>
      </Helmet>
      <h1>Hvilken bok har du lest?</h1>
      <section className="searchContainer">
        <SearchBar user={user} setUser={setUser} />
      </section>
    </>
  );
};
export default RegisterBook;
