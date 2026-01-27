// pages/play/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    levels: [
      {name:"facile",icon:" ",description:"Parfait pour debuter",bg:"bg-green",color:"text-white"},
      {name:"moyen",icon:" ",description:"Un bon challenge",bg:"bg-turquoise",color:"text-black"},
      {name:"expert",icon:" ",description:"Pour les Champions",bg:"bg-blue",color:"text-white"},
    ]
  },

  goBack(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})