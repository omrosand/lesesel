import { useState } from "react";
import { FaGrinStars } from "react-icons/fa";
import trophies from "../utils/trophies";

const Trophy = ({ user, setTrophy, trophy }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setTrophy(e.target.attributes.src?.value);
    setClicked(true);
  };

  return (
    <>
      <h4 className="trophyHeader">Opplåste:</h4>
      <section className="trophies">
        {trophies.map((t) => {
          if (t.condition(user) === true) {
            return (
              <section
                key={t.id}
                className="trophy unlockedTrophy"
                onClick={handleClick}
              >
                <img src={t.path} alt="trofé bilde" />
                <h5 key={t.id}>{t.name}</h5>
                {clicked && trophy === t.path ? (
                  <div className="trophyChosenOverlay">
                    <FaGrinStars className="trophyChosenText" />
                  </div>
                ) : null}
              </section>
            );
          }
        })}
      </section>
      <h4 className="trophyHeader">Låste:</h4>
      <section className="trophies">
        {trophies.map((trophy) => {
          if (trophy.condition(user) === false) {
            return (
              <section key={trophy.id} className="trophy">
                <img
                  src={trophy.path}
                  alt="trofé bilde"
                  className="lockedTrophy"
                />
                <h5 key={trophy.id}>{trophy.name}</h5>
              </section>
            );
          }
        })}
      </section>
    </>
  );
};
export default Trophy;
