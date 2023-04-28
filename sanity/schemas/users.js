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
            type: "array",
            of: [{type: 'invites'}]
        },
        {
            name: "books",
            type: "array",
            of: [{type: 'books'}]
        }
    ]
}