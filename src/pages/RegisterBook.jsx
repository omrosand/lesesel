import SearchBar from "../components/SearchBar";
import { Helmet } from "react-helmet";

const RegisterBook = ({ user, setUser }) => {
  return (
    <>
      <Helmet>
        <title>Registrer bøker</title>
      </Helmet>
      <section className="searchContainer">
        <SearchBar user={user} setUser={setUser} />
      </section>
    </>
  );
};
export default RegisterBook;
