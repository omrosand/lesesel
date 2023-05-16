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
            name: "books",
            title: "Bøker",
            type: "array",
            of: [{type: 'books'}]
        },
        {
            name: "favoriteBooks",
            title: "Favorittbøker",
            type: "array",
            of: [{type: "favoriteBooks"}]
        },
        {
            name: "password",
            title: "Passord",
            type: "string"
        },
        {
            name: "email",
            title: "Epost",
            type: "string",
            validation: Rule => Rule.email()
        }
    ]
}