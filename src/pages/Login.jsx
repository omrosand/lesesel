import { useState } from "react";
import { client } from "../utils/sanityclient";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

const Login = ({ setUser, user, setTrophy }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userId } = useParams();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await client.fetch(
        `*[_type == "users" && username == "${username}" && password == "${password}"][0]{
          _id,
        username, 
        avatar {
          asset-> {
            url
          }
        },
        books
      }`
      );
      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
        setUser(response);
      } else {
        alert("Feil brukernavn eller passord, prøv igjen!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Logg inn</title>
      </Helmet>
      {!user ? (
        <>
          <form onSubmit={handleLogin} className="loginForm" >
            <h2>Logg inn</h2>
            <div className="formWrapper">
              <label htmlFor="username">Brukernavn:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={handleUsername}
                name="username"
                required
              />
            </div>
            <div className="formWrapper">
              <label htmlFor="password">Passord:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePassword}
                name="password"
                required
              />
            </div>
            <button type="submit">Logg inn!</button>
            <p>
              Har du ikke bruker? Registrer deg{" "}
              <Link to="/registrer-bruker">her</Link>.
            </p>
          </form>
        </>
      ) : (
        <section className="loggedIn">
          <div>
            <img src="/src/img/Sel12.webp" alt="velkommen sel" />
            <div>
              <p>Du er logget inn som:</p>
              <h2>{user?.username}</h2>
            </div>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
              setUsername("");
              setPassword("");
              setTrophy("");
            }}
          >
            Logg ut!
          </button>
        </section>
      )}
    </>
  );
};
export default Login;
