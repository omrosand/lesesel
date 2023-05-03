import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { writeClient } from "../utils/sanityclient";


const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState("");

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
    e.preventDefault()
    const registerUser = {
      _type: "users",
      username: username,
      password: password,
      email: email,
    };

    writeClient
      .create(registerUser)
      .then((registerUserDocument) => {
        setNewUser(registerUserDocument);
      })
      .catch((error) => {
        console.log("Creating user failed:", error.message);
      });
  };


  return (
    <>
      <Helmet>
        <title>Registrer bruker</title>
      </Helmet>

      <h1>Registrer bruker</h1>
      <form onSubmit={handleRegisterUser} className="loginForm">
        <div className="formWrapper">
          <label htmlFor="email">E-post:</label>
          <input
            type="text"
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

        <button type="submit">Registrer bruker</button>

        <div>
          <p>
            Har du allerede en bruker? Logg inn <Link to="/login">her</Link>.
          </p>
        </div>
      </form>
    </>
  );
};

export default RegisterUser;