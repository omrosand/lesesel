import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { writeClient } from "../utils/sanityclient";

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState("");
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [error, setError] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const registerUser = {
      _type: "users",
      username: username,
      password: password,
      email: email,
    };

    writeClient
      .fetch(`*[_type == "users" && email == "${email}"][0]`)
      .then((existingUser) => {
        if (existingUser) {
          setError("En bruker med denne mailen eksisterer allerede");
        } else {
          writeClient
            .create(registerUser)
            .then((registerUserDocument) => {
              setNewUser(registerUserDocument);
            })
            .catch((error) => {
              console.log("Creating user failed:", error.message);
            });
        }
      })
      .catch((error) => {
        console.log("Fant ikke den eksisterende brukeren.:", error.message);
        setError("Fant ikke den eksisterende brukeren.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Registrer bruker</title>
      </Helmet>

      <form onSubmit={handleRegisterUser} className="loginForm">
        <h2>Registrer bruker</h2>
        <div className="formWrapper">
          <label htmlFor="email">E-post:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            name="email"
            id="email"
            required
          />
        </div>

        <div className="formWrapper">
          <label htmlFor="username">Brukernavn:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUsername}
            name="username"
            maxLength={12}
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

        <div className="checkbox">
          <label htmlFor="alder">
            <input type="checkbox" id="alder" required />
            Jeg er over 18 år.
          </label>
        </div>
        <div className="checkbox">
          <label htmlFor="gdpr">
            <input type="checkbox" id="gdpr" required />
            Jeg godkjenner{" "}
            <Link to="/oftestiltesporsmal">vilkår for personvern</Link>.
          </label>
        </div>

        {showSubmitButton && <button type="submit">Registrer bruker</button>}

        <div>
          {newUser && (
            <div>
              <p>
                Brukeren din med brukernavn <b>{newUser.username}</b> er
                registrert!
              </p>
              <p>
                Logg inn med brukeren din <Link to="/login">her.</Link>
              </p>
            </div>
          )}
          {error && <p className="errorMessage">{error}</p>}

          {!newUser && (
            <p>
              Har du allerede en bruker? Logg inn <Link to="/login">her</Link>.
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default RegisterUser;
