Page({
  data: {
    vitesse: [
      "lent",
      "normal",
      "rapide",
    ],
    params: {
      Audio: {
        "effets-sonore": true,
        Ambiance: false,
      },
      Retour: {
        vibration: true
      },
      vitesse: {
        vitesse: "normal",
      },
      about: {
        version: "1.0.0",
        for: "Enfants du senegal",
        objectif: "Préserver le patrimoine culturel",
        description: "Xaadi est un jeu traditionnel africain transmis de génération en génération. Cette application vise à faire découvrir ce jeu aux nouvelles générations."
      },
    },
    initialParams: null // on va y stocker la copie initiale
  },

  onLoad() {
    // Sauvegarde une copie profonde au chargement de la page
    this.setData({
      initialParams: JSON.parse(JSON.stringify(this.data.params))
    })
  },

  onParamToggle(e) {
    const { section, key, text } = e.currentTarget.dataset
    const { value } = e.detail

    const path = `params.${section}.${key}`

    this.setData({
      [path]: value ?? text
    })
  },

  resetParams() {
    this.setData({
      params: JSON.parse(JSON.stringify(this.data.initialParams))
    })
  }
})
