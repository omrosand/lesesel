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

const Nav = ({ user }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activePath, setActivePath] = useState(window.location.pathname);

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
            <div>
              {element.icon}
              <Link
                to={element.path}
                onClick={() => setActivePath(element.path)}
                className={element.path === activePath ? "active" : ""}
              >
                {element.title}
              </Link>
            </div>
            {element.dropdown && activeDropdown === index && (
              <ul className="dropdown">
                {element.dropdown.map((item) => (
                  <li key={item.title}>
                    <div>
                      {item.icon}
                      <Link
                        to={item.path}
                        onClick={() => setActivePath(item.path)}
                        className={item.path === activePath ? "active" : ""}
                      >
                        {item.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="navElement">
          <div>
            <HiLogout />
            {!user ? (
              <Link
                to="/login"
                onClick={() => setActivePath("/login")}
                className={"/login" === activePath ? "active" : ""}
              >
                Logg inn
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setActivePath("/login")}
                className={"/login" === activePath ? "active" : ""}
              >
                Logg ut
              </Link>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
