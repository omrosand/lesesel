import trophies from "../utils/trophies";

const Trophy = ({ user }) => {
  return (
    <>
      <h4 className="trophyHeader">Opplåste:</h4>
      <section className="trophies">
        {trophies.map((trophy) => {
          if (trophy.condition(user) === true) {
            return (
              <section className="trophy">
                <img src={trophy.path} alt="trofé bilde" />
                <h5 key={trophy.id}>{trophy.name}</h5>
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
              <section className="trophy">
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
