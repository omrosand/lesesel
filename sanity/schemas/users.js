export default {
    name: "users",
    type: "document",
    title: "Brukere",
    fields: [
        {
            name: "username",
            type: "string",
            title: "Brukernavn",
        }, 
        {
            name: "avatar",
            type: "image",
            title: "Avatar"
        },
        {
            name: "invites",
            title: "Invitasjoner",
            type: "array",
            of: [{type: 'invites'}]
        },
        {
            name: "books",
            title: "Bøker",
            type: "array",
            of: [{type: 'books'}]
        },
        {
            name: "password",
            title: "Passord",
            type: "string"
        }
    ]
}