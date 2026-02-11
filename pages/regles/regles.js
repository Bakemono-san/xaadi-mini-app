Page({
  data: {
    rules: {
      "Qu'est ce que le Xaadi?":   {list_type: '',icon: '',  details:["Le Xaadi est un jeu traditionnel africain de stratégie, aussi connu sous le nom d'Awélé ou Mancala. Il se joue depuis des siècles et développe la réflexion et la stratégie."]},
      "Mise en place": {list_type: '',icon: '', details: [
        "Le plateau comporte 12 trous (6 par joueur)",
        "Chaque trou contient 4 graines au début",
        "Total de 48 graines en jeu"
      ]},
      "Comment jouer  ": {list_type: 'index', icon: '', details: [
        "Choisissez un trou de votre côté contenant des graines",
        "Prenez toutes les graines du trou choisi",
        "Distribuez-les une par une dans les trous suivants, dans le sens anti-horaire",
        "Si vous faites le tour complet, sautez le trou de départ"
      ]},
      "Capturer des graines": {list_type: '>', icon: '', details: [
        "Votre dernière graine tombe dans un trou adverse",
        "Ce trou contient maintenant 2 ou 3 graines",
        "Vous capturez aussi les trous précédents avec 2-3 graines"
      ]},
      "Fin de partie": {list_type: '', icon: '', details: [
        "La partie se termine quand un joueur n'a plus de graines dans ses trous.",
        "Le gagnant est celui qui a capturé le plus de graines !"
      ]},
      "Conseils strategique": {list_type: '☆', icon: '', details: [
        "Essayez de capturer plusieurs trous en une fois",
        "Protégez vos trous avec 2-3 graines",
        "Anticipez les coups de votre adversaire",
        "Gardez toujours des graines dans vos trous"
      ]}, 
    }
  },

  goBack(){
    wx.navigateBack({delta: 1})
  },

  start(){
    wx.navigateTo({
      url: '/pages/play/index',
    })
  }
})