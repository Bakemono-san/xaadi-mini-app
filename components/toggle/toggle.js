Component({
  properties: {
    checked: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onToggle() {
      const newValue = !this.data.checked
      this.setData({
        checked: newValue
      })

      this.triggerEvent('change', { value: newValue })
    }
  }
})
