const app = getApp()

Page({
  data: {
    
  },
  onLoad: function(){
    wx.switchTab({
      url: "../courseRating/courseRating",
    })
  }
})
