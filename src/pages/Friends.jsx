import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { client } from "../utils/sanityclient";

const Friends = ({ user }) => {
  const [friends, setFriends] = useState([]);

  const testId = "4af45169-af7e-4fd4-abe5-1018e191d6aa";

  useEffect(() => {
    const fetchFriendships = async () => {
      try {
        const query = `*[_type == "friendship" && (inviter._ref == "${user._id}" || invitee._ref == "${user._id}")]{
          _id,
          inviter._ref,
          invitee._ref,
          accepted,
        }`;
        const result = await client.fetch(query, userId);
        console.log(result);
        setFriends(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriendships();
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Mine venner</title>
      </Helmet>

      <article className="pageCard">
        <h1>Venner</h1>
        <button
          onClick={() => {
            console.log(user);
          }}
        >
          test
        </button>
        <ul>{JSON.stringify(friends)}</ul>
      </article>
    </>
  );
};
export default Friends;
