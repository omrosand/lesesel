import { Helmet } from "react-helmet";

const ReadBooks = ({ user }) => {
  return (
    <>
      <Helmet>
        <title>Leste bøker</title>
      </Helmet>
      <article className="pageCard">
        <h1>Leste bøker</h1>
        <h2>Bokhistorikk:</h2>
        <ol>
          {user?.books?.reverse().map((book) => (
            <li key={book._key}>
              <p>{book.title}</p>
            </li>
          ))}
        </ol>
      </article>
    </>
  );
};
export default ReadBooks;
