import { Link } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaBook,
  FaUserFriends,
  FaQuestionCircle,
  FaCog,
} from "react-icons/fa";
import { HiLogout } from "react-icons/hi";

const navElements = [
  {
    title: "Hjem",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "Min Profil",
    path: "/minprofil",
    icon: <FaUser />,
  },
  {
    title: "Mine Bøker",
    path: "/mineboker",
    icon: <FaBook />,
    dropdown: [
      {
        title: "Registrer",
        path: "/registrerbok",
        icon: <FaBook />,
      },
      {
        title: "Leste bøker",
        path: "/lesteboker",
        icon: <FaBook />,
      },
      {
        title: "Favoritter",
        path: "/favoritter",
        icon: <FaBook />,
      },
    ],
  },
  {
    title: "Venner",
    path: "/venner",
    icon: <FaUserFriends />,
  },
  {
    title: "Ofte stilte spørsmål",
    path: "/oftestiltesporsmal",
    icon: <FaQuestionCircle />,
  },
  {
    title: "Innstillinger",
    path: "/innstillinger",
    icon: <FaCog />,
  },
  {
    title: "Logg ut",
    path: "/loggut",
    icon: <HiLogout />,
  },
];

const Nav = () => {
  return (
    <nav className="mainNav">
      <ul>
        {navElements.map((element) => (
          <li className="navElement" key={element.title}>
            {element.icon}
            <Link to={element.path}>{element.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
