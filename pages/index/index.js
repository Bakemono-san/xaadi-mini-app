const app = getApp()

Page({
  data: {
    menus: [
      {
        name: "Jouer seul",
        icon: "icon",
        url: "",
        bg: "bg-turquoise",
        color: "text-black"
      },
      {
        name: "2 Joueurs",
        icon: "icon",
        url: "",
        bg: "bg-turquoise",
        color: "text-black"
      },
      {
        name: "Jeu en ligne",
        icon: "icon",
        url: "",
        bg: "bg-blue",
        color: "text-white"
      }
      ,{
        name: "Régles",
        icon: "icon",
        url: "/pages/regles/regles",
        bg: "bg-green",
        color: "text-white"
      },
      {
        name: "Paramétres",
        icon: "icon",
        url: "/pages/params/params",
        bg: "bg-blue",
        color: "text-white"
      },
      {
        name: "Scores",
        icon: "icon",
        url: "/pages/scores/scores",
        bg: "bg-yellowish",
        color: "text-black"
      },
    ]
  }
})
