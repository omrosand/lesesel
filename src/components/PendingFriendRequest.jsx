import { useEffect, useState } from "react";
import { client } from "../utils/sanityclient";

const PendingFriendRequest = ({ user, friendships }) => {
  const [pendingList, setPendingList] = useState([]);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const requesterIds = friendships
          .filter((friendship) => friendship.accepted === 0)
          .map((friendship) =>
            friendship.invitee._id === user._id ? friendship.inviter._id : null
          );

        const friendRequests = requesterIds.map((requesterId) =>
          client.fetch(
            `*[_type == "users" && _id == "${requesterId}"]{
              _id,
              username,
              avatar {
                asset-> {
                  url
                }
              }
            }`
          )
        );

        const pendingFriendRequests = await Promise.all(friendRequests);
        setPendingList(pendingFriendRequests);
      } catch (error) {
        console.log(error);
      }
    };
    if (friendships.length > 0) {
      fetchFriendRequests();
    }
  }, []);

  //TODO: Lag en query som sjekker opp mot sanity etter friendship med requesterId og user._id -> Så oppdater det friendship objektet
  const handleClick = (approveStatus, requesterId) => {
    console.log(requesterId);
    console.log(approveStatus);
  };

  return (
    <>
      <ul>
        {pendingList.flat().map((request) => (
          <li key={request._id} className="pendingFriend">
            <section>
              <img
                src={request.avatar?.asset?.url}
                alt={`avataren til ${request.username}`}
              />
              <p>{request.username}</p>
            </section>
            <section>
              <button
                type="button"
                className="accept"
                onClick={() => handleClick(2, request._id)}
              >
                Godta
              </button>
              <button
                type="button"
                className="deny"
                onClick={() => handleClick(1, request._id)}
              >
                Avslå
              </button>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
};
export default PendingFriendRequest;
