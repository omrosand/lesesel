const trophies = [
  {
    id: 1,
    name: "Lest din første bok!",
    path: "/src/img/trophies/ForsteBok.webp",
    condition: (user) => {
      return user.books?.length > 0;
    },
  },
  {
    id: 2,
    name: "Lagt til din første venn!",
    path: "/src/img/trophies/ForsteVenn.webp",
    condition: (user) => {
      return user.friends?.length > 0;
    },
  },
  {
    id: 3,
    name: "Lest 10 bøker!",
    path: "/src/img/trophies/10Boker.webp",
    condition: (user) => {
      return user.books?.length > 9;
    },
  },
  {
    id: 4,
    name: "Lest 50 bøker!",
    path: "/src/img/trophies/50Boker.webp",
    condition: (user) => {
      return user.books?.length > 49;
    },
  },
  {
    id: 5,
    name: "Lest en bok på over 100 sider!",
    path: "/src/img/trophies/BokOver100Sider.webp",
    condition: (user) => {
      let unlock = false;
      user.books?.map((book) => {
        if (book.pages > 99) {
          unlock = true;
        }
        return unlock;
      });
      return unlock;
    },
  },
  {
    id: 6,
    name: "Lest en bok på over 150 sider!",
    path: "/src/img/trophies/BokOver150Sider.webp",
    condition: (user) => {
      let unlock = false;
      user.books?.map((book) => {
        if (book.pages > 149) {
          unlock = true;
        }
        return unlock;
      });
      return unlock;
    },
  },
  {
    id: 7,
    name: "Lagt til 10 favoritter!",
    path: "/src/img/trophies/10Favoritter.webp",
    condition: (user) => {
      return user.favourites?.length > 9;
    },
  },
  {
    id: 8,
    name: "Førsteplass på scoreboard!",
    path: "/src/img/trophies/ForstePlass.webp",
    condition: (user) => {
      return false;
    },
  },
];
export default trophies;
