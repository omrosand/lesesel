import { Helmet } from "react-helmet";
import { useState } from "react";
import Users from "../components/Users";

const MyProfile = () => {
  const [users, setUsers] = useState(null);

  function handleUsersLoad(data) {
    setUsers(data);
  }

  return (
    <>
      <article className="myProfile">
        <Helmet>
          <title>Min profil</title>
        </Helmet>
        <Users onUsersLoad={handleUsersLoad} />
        {users && (
          <>
            <img
              className="avatar"
              src={users?.avatar?.asset?.url}
              alt="Avatar"
            />
            <h2>{users?.username}'s profil</h2>

            <h3>Min poengscore</h3>
            <p>293</p>

            <h3>Mine trofeer</h3>
          </>
        )}
      </article>
    </>
  );
};
export default MyProfile;
