import Toast from '../../vant-weapp/toast/toast';
Page({
  data: {
    isShowWeChat: false,
  },

  openWeather() {
    wx.navigateToMiniProgram({
      appId: "wx285a242d191f9226"
    });
  },
  showPopup() {
    this.setData({
      isShowWeChat: true
    });
  },

  onClosePopup() {
    this.setData({
      isShowWeChat: false
    });
  },
  onLoad: function (options) {},

  onShareAppMessage: function () {},
  //朋友圈
  onShareTimeline() {},
})