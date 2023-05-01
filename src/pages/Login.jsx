import { useState } from "react";
import { client } from "../utils/sanityclient";
import { Helmet } from "react-helmet";

const Login = ({ setUser, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

    console.log(username, password);
  };

  return (
    <>
      <Helmet>
        <title>Logg inn</title>
      </Helmet>
      {!user ? (
        <>
          <p className="introText">
            For å kunne bruke Lesesel må du logge deg inn bla bla bla Donec
            lacinia auctor ante, a vestibulum purus suscipit eleifend. Sed nec
            volutpat massa.
          </p>
          <form onSubmit={handleLogin} className="loginForm">
            <div className="formWrapper">
              <label htmlFor="username">Brukernavn:</label>
              <input
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
                type="password"
                value={password}
                onChange={handlePassword}
                name="password"
                required
              />
            </div>
            <button type="submit">Logg inn!</button>
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
