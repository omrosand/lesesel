import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Settings from "./pages/Settings";
import MyBooks from "./pages/MyBooks";
import Friends from "./pages/Friends";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minprofil" element={<MyProfile />} />
        <Route path="/mineboker" element={<MyBooks />} />
        <Route path="/venner" element={<Friends />} />
        <Route path="/innstillinger" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
