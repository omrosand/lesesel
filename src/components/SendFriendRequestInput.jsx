import { useState } from "react";
import { writeClient } from "../utils/sanityclient";
import { ImSpinner } from "react-icons/im";

const SendFriendRequestInput = ({ user }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("Skriv inn et brukernavn du vil sende venneforspørsel til");
      return;
    }
    try {
      setLoading(true);
      setSuccess(false);
      const sender = await writeClient.fetch(
        `*[_type == "users" && username == $username][0]`,
        {
          username: user.username,
        }
      );
      const recipient = await writeClient.fetch(
        `*[_type == "users" && username == $username][0]`,
        {
          username: inputValue,
        }
      );
      if (!recipient) {
        alert(`Finner ikke bruker med navn ${inputValue}`);
        setLoading(false);
        return;
      }

      await writeClient.create({
        _type: "friendship",
        inviter: {
          _type: "reference",
          _ref: sender._id,
        },
        invitee: {
          _type: "reference",
          _ref: recipient._id,
        },
        accepted: 0,
      });
      setSuccess(true);
      console.log(
        `Sendt venneforespørsel fra ${user.username} til ${inputValue}`
      );
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
    setLoading(false);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {loading ? (
        <section className="friendAddLoadingSection">
          <ImSpinner className="loadingSpinner" />
        </section>
      ) : (
        <section className="addFriendSection">
          <h2>Legg til venn:</h2>
          <form className="friendForm" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              className="searchField"
              value={inputValue}
              placeholder="Skriv brukernavnet her..."
            />
            <button type="submit">Send</button>
          </form>
        </section>
      )}
      {success ? (
        <p>
          Sendt venneforespørsel til <b>{inputValue}</b>
        </p>
      ) : null}
    </>
  );
};
export default SendFriendRequestInput;
