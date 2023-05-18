import { useEffect, useState } from "react";
import { client } from "../utils/sanityclient";

const FriendList = ({ friendships, user, friends, setFriends }) => {
  const sumScore = (friendId) => {
    if (friendId.books?.length > 0) {
      let score = 0;
      friendId.books.forEach((book) => {
        if (book.pages) {
          score += parseInt(book.pages);
        }
      });
      return score;
    }
  };

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendIds = friendships
          .filter((friendship) => friendship.accepted === 2)
          .map((friendship) =>
            friendship.inviter._id === user._id
              ? friendship.invitee._id
              : friendship.inviter._id
          );

        const friendRequests = friendIds.map((friendId) =>
          client.fetch(
            `*[_type == "users" && _id == "${friendId}"]{
              _id,
              username,
              avatar {
                asset-> {
                  url
                }
              },
              books
            }`
          )
        );

        const friendResponses = await Promise.all(friendRequests);
        setFriends(friendResponses);
      } catch (error) {
        console.log(error);
      }
    };

    if (friendships.length > 0) {
      fetchFriends();
    }
  }, [friendships]);

  return (
    <ul className="friends">
      {friends?.map((myFriends) =>
        myFriends.map((friend) => (
          <li className="friendCard" key={friend._id}>
            <h2>{friend.username}</h2>
            <img
              src={friend.avatar?.asset?.url}
              alt={`avatar for ${friend.username}`}
            />

            {friend.books?.length > 0 ? (
              <p className="friendBooksRead">
                Har lest {friend.books?.length} bøker!
              </p>
            ) : (
              <p className="friendBooksRead">Skal snart lese sin første bok!</p>
            )}
            {sumScore(friend) > 0 ? <p>Score: {sumScore(friend)}</p> : null}
          </li>
        ))
      )}
    </ul>
  );
};

export default FriendList;
