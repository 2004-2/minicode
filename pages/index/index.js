const app = getApp()
// ljwr
Page({
  data: {
    currentTab: 0,
  },

  swichNav: function (e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    })
  }
})
