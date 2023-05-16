import { useState } from "react";
import { Helmet } from "react-helmet";
import { client } from "../utils/sanityclient";

const Friends = ({ user }) => {
  const [friends, setFriends] = useState();

  const ole = "4af45169-af7e-4fd4-abe5-1018e191d6aa";

  const handleClick = async () => {
    try {
      if (user) {
        const query = `*[_type == "friendship" && "${ole}" == inviter._ref || "${ole}" == invitee._ref]{
          _id,
          inviter._ref,
          invitee._ref,
          accepted,
        }`;
        const result = await client.fetch(query);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Mine venner</title>
      </Helmet>

      <article className="pageCard">
        <h1>Venner</h1>
        <button onClick={handleClick}>test</button>
      </article>
    </>
  );
};
export default Friends;
