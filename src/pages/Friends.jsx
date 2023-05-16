import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { client } from "../utils/sanityclient";
import FriendList from "../components/FriendList";
import PendingFriendRequest from "../components/PendingFriendRequest";
import { Link } from "react-router-dom";

const Friends = ({ user, activePath, setActivePath }) => {
  const [friendshipStatus, setFriendshipStatus] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFriendships = async () => {
      try {
        setLoading(true);
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
        <FriendList user={user} friendships={friendshipStatus} />
        <Link
          to="/scoreboard"
          onClick={() => setActivePath("/scoreboard")}
          className={"/scoreboard" === activePath ? "active" : ""}
        >
          <button type="button">Gå til scoreboard</button>
        </Link>
        <h2>Venneforespørsler:</h2>
        <PendingFriendRequest user={user} friendships={friendshipStatus} />
      </article>
    </>
  );
};

export default Friends;
