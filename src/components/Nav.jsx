import { Link } from "react-router-dom";

const navElements = [
  {
    title: "Hjem",
    path: "/",
  },
  {
    title: "Min Profil",
    path: "/minprofil",
  },
  {
    title: "Mine Bøker",
    path: "/mineboker",
  },
  {
    title: "Venner",
    path: "/venner",
  },
  {
    title: "Innstillinger",
    path: "/innstillinger",
  },
];

const Nav = () => {
  return (
    <nav className="mainNav">
      <ul>
        {navElements.map((element) => (
          <li key={element.title}>
            <Link to={element.path}>{element.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
