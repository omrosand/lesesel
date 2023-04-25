import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { client } from "../utils/sanityclient";

const MyProfile = () => {
  const [users, setUsers] = useState(null);

  async function fetchUsers() {
    const data = await client.fetch(`*[_type == "users"]`);
    return data;
  }

  async function getUsers() {
    const data = await fetchUsers();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Helmet>
        <title>Min profil</title>
      </Helmet>
      <h1>Min Profil</h1>
      <img src={users?.avatar?.asset?.url} />
      <h2>{users?.username}'s profil</h2>

      <h3>Min poengscore</h3>
      <h3>Mine trofeer</h3>
    </>
  );
};
export default MyProfile;
