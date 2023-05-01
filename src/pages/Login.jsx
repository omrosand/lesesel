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
      <div>
        <h2>Du er logget inn som {user?.username}</h2>
        <img className="avatar" src={user?.avatar?.asset?.url} alt="Avatar" />
      </div>
      <Helmet>
        <title>Logg inn</title>
      </Helmet>
      <p>
        For å kunne bruke Lesesel må du logge deg inn bla bla bla Donec lacinia
        auctor ante, a vestibulum purus suscipit eleifend. Sed nec volutpat
        massa. Phasellus a sapien eleifend, sollicitudin nisl quis, vulputate
        ante. Mauris dignissim ut eros vitae condimentum. Pellentesque arcu
        neque, sollicitudin quis nulla ac, cursus aliquet orci.
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
      <button
        onClick={() => {
          localStorage.removeItem("user");
          setUser(null);
          setUsername("");
          setPassword("");
        }}
      >
        Slett localStorage og reset bruker
      </button>
    </>
  );
};
export default Login;
