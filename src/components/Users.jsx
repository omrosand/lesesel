import { useState, useEffect } from "react";
import { client } from "../utils/sanityclient"

export default function Users({onUsersLoad}) {
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
      onUsersLoad(result)
    }
    fetchUsers()
  }, []);
  
  return null;
}

