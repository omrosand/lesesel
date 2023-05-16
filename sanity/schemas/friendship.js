export default {
  name: 'friendship',
  type: 'document',
  title: 'Vennskap',
  fields: [
    {
      name: 'inviter',
      type: 'reference',
      to: [{type: 'users'}],
      title: 'Invitasjonssender',
    },
    {
      name: 'invitee',
      type: 'reference',
      to: [{type: 'users'}],
      title: 'Invitasjonsmottaker',
    },
    {
      name: 'accepted',
      type: 'boolean',
      title: 'Akseptert',
    },
  ],
}
