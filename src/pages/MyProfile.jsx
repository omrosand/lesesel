import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { client } from "../utils/sanityclient";

const MyProfile = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const query = `*[_type == "users" && _id == $userId][0] {
        username, 
        avatar {
          asset-> {
            url
          }
        }
      }`
      const userId = {userId: '21ff6829-cd5e-4d19-9ea6-10118b81ee96'}
      const result = await client.fetch(query, userId)

      setUsers(result)
    }
    fetchUsers()
  }, []);

  return (
    <article className="myProfile">
      <Helmet>
        <title>Min profil</title>
      </Helmet>
      <img className="avatar" src={users?.avatar?.asset?.url} alt="Avatar"/>
      <h2>{users?.username}'s profil</h2>

      <h3>Min poengscore</h3>
      <p>293</p>

      <h3>Mine trofeer</h3>
    </article>
  );
};
export default MyProfile;
