Page({
  data: {
    tabs: {
      tous: { active: true },
      solo: { active: false },
      deux: { active: false }
    },
    stats: {
      parties_jouees: {
        solo: 1,
        deux: 5
      },
      victoire: {
        solo: 1,
        deux: 5
      },
      defaite: {
        solo: 1,
        deux: 5
      },
      nuls: {
        solo: 1,
        deux: 5
      },
    },
    currentTab: 'tous',
    displayedStats: {} // penser à initialiser ici pour éviter undefined au début
  },

  getDisplayedStats() {
    const { stats, currentTab } = this.data

    if (currentTab === 'tous') {
      return {
        parties_jouees: (stats.parties_jouees.solo || 0) + (stats.parties_jouees.deux || 0),
        victoire: (stats.victoire.solo || 0) + (stats.victoire.deux || 0),
        defaite: (stats.defaite.solo || 0) + (stats.defaite.deux || 0),
        nuls: (stats.nuls.solo || 0) + (stats.nuls.deux || 0),
      }
    } else if (currentTab === 'solo') {
      return {
        parties_jouees: stats.parties_jouees.solo || 0,
        victoire: stats.victoire.solo || 0,
        defaite: stats.defaite.solo || 0,
        nuls: stats.nuls.solo || 0,
      }
    } else if (currentTab === 'deux') {
      return {
        parties_jouees: stats.parties_jouees.deux || 0,
        victoire: stats.victoire.deux || 0,
        defaite: stats.defaite.deux || 0,
        nuls: stats.nuls.deux || 0,
      }
    }
  },

  refreshDisplayedStats() {
    const displayedStats = this.getDisplayedStats()
    this.setData({ displayedStats })
  },

  onLoad() {
    this.refreshDisplayedStats()
  },

  start(){
    wx.navigateTo({
      url: '/pages/play/index',
    })
  },

  onTabClick(e) {
    const tab = e.currentTarget.dataset.tab
    this.setData({
      currentTab: tab
    })
  }
})
