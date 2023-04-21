import { useState } from "react";
import { client } from "../utils/sanityclient";
import { useEffect } from "react";

export default function TestUsers() {
    const [users, setUsers] = useState(null) 

    async function fetchUsers() {
        const data = await client.fetch(`*[_type == "users"]`)
        return data
    }

    async function getUsers() {
        const data = await fetchUsers()
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])
    console.log(users)
}