import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { client } from "../utils/sanityclient";

const Friends = ({ user }) => {
  const [friendshipStatus, setFriendshipStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriendships = async () => {
      try {
        const query = `*[_type == "friendship" && (inviter._ref == $userId || invitee._ref == $userId)]{
          _id,
          inviter->{_id},
          invitee->{_id},
          accepted
        }`;
        const params = { userId: user._id };
        const result = await client.fetch(query, params);
        setFriendshipStatus(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchFriendships();
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Mine venner</title>
      </Helmet>

      <article className="pageCard">
        <h1>Venner</h1>
        <ul>{JSON.stringify(friendshipStatus)}</ul>
      </article>
    </>
  );
};

export default Friends;
