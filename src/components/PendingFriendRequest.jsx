import { useEffect, useState } from "react";
import { writeClient } from "../utils/sanityclient";

const PendingFriendRequest = ({
  user,
  friendships,
  setFriendshipStatus,
  fetchFriendships,
}) => {
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
          writeClient.fetch(
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
  }, [friendships]);

  const handleClick = async (approveStatus, requesterId) => {
    try {
      const friendship = friendships.find(
        (friendship) =>
          friendship.inviter._id === requesterId &&
          friendship.invitee._id === user._id
      );

      if (!friendship) {
        console.log("Friendship not found");
        return;
      }

      await writeClient
        .patch(friendship._id)
        .set({ accepted: approveStatus })
        .commit();

      const updatedFriendship = await writeClient.fetch(
        `*[_type == "friendship" && _id == "${friendship._id}"]{
        _id,
        inviter,
        invitee,
        accepted
      }`
      );

      console.log(
        `Venneforespørsel ${
          approveStatus === 2 ? "godkjent" : "avslått"
        } for ID: ${requesterId}`
      );

      const updatedFriendshipStatus = friendships.map((friendship) =>
        friendship._id === updatedFriendship[0]._id
          ? updatedFriendship[0]
          : friendship
      );
      setFriendshipStatus(updatedFriendshipStatus);
      if (approveStatus === 2) {
        fetchFriendships();
      }
    } catch (error) {
      console.error(error);
    }
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
