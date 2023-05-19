import { useEffect, useState } from "react";
import { ImSpinner } from "react-icons/im";
import { Helmet } from "react-helmet";
import { client } from "../utils/sanityclient";
import FriendList from "../components/FriendList";
import PendingFriendRequest from "../components/PendingFriendRequest";
import { Link } from "react-router-dom";
import SendFriendRequestInput from "../components/SendFriendRequestInput";

const Friends = ({ user, activePath, setActivePath }) => {
  const [friendshipStatus, setFriendshipStatus] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchFriendships();
    }
  }, [user]);

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

  if (loading) {
    return <ImSpinner className="loadingSpinner" />;
  }

  return (
    <>
      <Helmet>
        <title>Mine venner</title>
      </Helmet>

      <article className="pageCard friendsCard">
        <h1>Venner</h1>
        <SendFriendRequestInput user={user} />
        <h2>Mine venner:</h2>
        <FriendList
          user={user}
          friendships={friendshipStatus}
          friends={friends}
          setFriends={setFriends}
        />
        <Link
          to="/scoreboard"
          onClick={() => setActivePath("/scoreboard")}
          className={"/scoreboard" === activePath ? "active" : ""}
        >
          <button type="button">Gå til scoreboard</button>
        </Link>
        <h2>Venneforespørsler:</h2>
        <PendingFriendRequest
          user={user}
          friendships={friendshipStatus}
          setFriendshipStatus={setFriendshipStatus}
          setFriends={setFriends}
          fetchFriendships={fetchFriendships}
        />
      </article>
    </>
  );
};

export default Friends;
