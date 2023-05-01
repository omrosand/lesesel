import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(username, password);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  return (
    <>
      <h1>Logg inn</h1>
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
          localStorage.removeItem("username");
          localStorage.removeItem("password");
        }}
      >
        Slett localStorage
      </button>
    </>
  );
};
export default Login;
