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

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minprofil" element={<MyProfile />} />
        <Route path="/mineboker" element={<MyBooks />} />
        <Route path="/venner" element={<Friends />} />
        <Route path="/oftestiltesporsmal" element={<Faq />} />
        <Route path="/innstillinger" element={<Settings />} />
        <Route path="/registrerbok" element={<RegisterBook />} />
        <Route path="/lesteboker" element={<ReadBooks />} />
        <Route path="/favoritter" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
