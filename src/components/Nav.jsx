import { Link } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaBook,
  FaUserFriends,
  FaQuestionCircle,
  FaCog,
  FaCheckCircle,
  FaStar,
  FaMedal,
} from "react-icons/fa";
import { HiLogout } from "react-icons/hi";
import { GiArchiveRegister } from "react-icons/gi";
import { useState } from "react";

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
        icon: <GiArchiveRegister />,
      },
      {
        title: "Leste bøker",
        path: "/lesteboker",
        icon: <FaCheckCircle />,
      },
      {
        title: "Favoritter",
        path: "/favoritter",
        icon: <FaStar />,
      },
    ],
  },
  {
    title: "Venner",
    path: "/venner",
    icon: <FaUserFriends />,
    dropdown: [
      {
        title: "Scoreboard",
        path: "/scoreboard",
        icon: <FaMedal />,
      },
    ],
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
];

const Nav = ({ user, activePath, setActivePath }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="mainNav">
      <ul>
        {navElements.map((element, index) => (
          <li
            className="navElement"
            key={element.title}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={element.path}
              onClick={() => setActivePath(element.path)}
              className={element.path === activePath ? "active" : ""}
            >
              {element.icon}
              <p>{element.title}</p>
            </Link>
            {element.dropdown && activeDropdown === index && (
              <ul className="dropdown">
                {element.dropdown.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.path}
                      onClick={() => setActivePath(item.path)}
                      className={item.path === activePath ? "active" : ""}
                    >
                      {item.icon}
                      <p>{item.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="navElement">
          {!user ? (
            <Link
              to="/login"
              onClick={() => setActivePath("/login")}
              className={"/login" === activePath ? "active" : ""}
            >
              <HiLogout />
              <p>Logg inn</p>
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={() => setActivePath("/login")}
              className={"/login" === activePath ? "active" : ""}
            >
              <HiLogout />
              <p>Logg ut</p>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
