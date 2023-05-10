import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Settings from "./pages/Settings";
import MyBooks from "./pages/MyBooks";
import Friends from "./pages/Friends";
import RegisterBook from "./pages/RegisterBook";
import Faq from "./pages/Faq";
import Favorites from "./pages/Favorites";
import ReadBooks from "./pages/ReadBooks";
import RegisterUser from "./pages/RegisterUser";
import TestUsers from "./components/TestUsers";
import ToTopButton from "./components/ToTopButton";
import NavScoreboard from "./components/NavScoreboard";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [trophy, setTrophy] = useState("");

  useEffect(() => {
    const authenticatedUser = localStorage.getItem("user");
    if (authenticatedUser && authenticatedUser !== "undefined") {
      setUser(JSON.parse(authenticatedUser));
    }
  }, []);

  return (
    <>
      <div className="contentWrapper">
        <div className="bannerWrapper">
          <img className="banner" src="/src/assets/banner3.png" />

          <Nav user={user} />
        </div>

        <NavScoreboard user={user} trophy={trophy} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/minprofil"
            element={
              <MyProfile user={user} setTrophy={setTrophy} trophy={trophy} />
            }
          />
          <Route path="/mineboker" element={<MyBooks />} />
          <Route path="/venner" element={<Friends />} />
          <Route path="/oftestiltesporsmal" element={<Faq />} />
          <Route path="/innstillinger" element={<Settings />} />
          <Route
            path="/registrerbok"
            element={<RegisterBook user={user} setUser={setUser} />}
          />
          <Route path="/lesteboker" element={<ReadBooks user={user} />} />
          <Route path="/favoritter" element={<Favorites />} />
          <Route path="/registrer-bruker" element={<RegisterUser />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
        </Routes>
        <TestUsers />
      </div>
      <ToTopButton />
      <Footer />
    </>
  );
}

export default App;
