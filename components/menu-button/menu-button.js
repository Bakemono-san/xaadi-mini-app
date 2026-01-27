Component({
 
  properties: {
    
    title:{
      type: String,
      value: ''
    },
    colorClass: {
      type: String,
      value: ''
    },
    background: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: 'blue'
    },
    url: {
      type: String,
      value: ''
    }

  },
  
  methods: {
    navigate(){
      const {url} = this.data
      wx.navigateTo({url})
    }
  }
})
