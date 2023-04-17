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
  {
    title: "Logg ut",
    path: "/loggut",
    icon: <HiLogout />,
  },
];

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="mainNav">
      <ul>
        {navElements.map((element) => (
          <li
            className="navElement"
            key={element.title}
            onMouseEnter={element.dropdown ? handleMouseEnter : null}
            onMouseLeave={element.dropdown ? handleMouseLeave : null}
          >
            <div>
              {element.icon}
              <Link to={element.path}>{element.title}</Link>
            </div>
            <ul className="dropdown">
              {showDropdown && element.dropdown
                ? element.dropdown.map((element) => (
                    <li key={element.title}>
                      <div>
                        {element.icon}
                        <Link to={element.path}>{element.title}</Link>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
