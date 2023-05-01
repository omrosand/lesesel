import { useState } from "react";
import Users from "./Users";

const NavScoreboard = () => {
  const [users, setUsers] = useState(null);

  function handleUsersLoad(data) {
    setUsers(data);
  }

  return (
    <article className="navScoreboard">
      <Users onUsersLoad={handleUsersLoad} />
      {users && (
        <>
          <section className="imgSection">
            <img src={users?.avatar?.asset?.url} />
          </section>

          <section>
            <p className="username">{users?.username}</p>
            <p>Poengscore:</p>
          </section>

          <section className="trophySection">
            <p>Trofeer:</p>
            <ul>
              <li></li>
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default NavScoreboard;
