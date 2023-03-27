import SearchBar from "../components/SearchBar";

const RegisterBook = () => {
  return (
    <>
      <h1>Hvilken bok har du lest?</h1>
      <section className="searchContainer">
        <SearchBar />
        <div>Treff:</div>
      </section>
    </>
  );
};
export default RegisterBook;
