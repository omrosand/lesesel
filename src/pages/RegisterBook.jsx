import SearchBar from "../components/SearchBar";
import { Helmet } from 'react-helmet';


const RegisterBook = () => {
  return (
    <>
    <Helmet>
      <title>Registrer bøker</title>
    </Helmet>
      <h1>Hvilken bok har du lest?</h1>
      <section className="searchContainer">
        <SearchBar />
      </section>
    </>
  );
};
export default RegisterBook;
