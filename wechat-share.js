"use strict"
;(function () {
  var extend = function (a, b) {
    var i = ''
    b = b || {}
    for (i in b) {
      a[i] = b[i]
    }
    return a
  }
  
  var wechatShare = {
    dataForWeixin: {
      imgUrl: 'http://tips.wechat.com/wechatportal/img/logo.png',
      link: location.href,
      title: 'I get the wechat-share.js, share to u.',
      desc: 'wechat share, good job!',
      dataUrl: '',
      success: function () { 
          // 用户确认分享后执行的回调函数
      },
      cancel: function () { 
          // 用户取消分享后执行的回调函数
      }
    },
    update: function (arg) {
      this.dataForWeixin = extend(this.dataForWeixin, arg || {})
    },
    _addListener: function () {
      wx.onMenuShareAppMessage(this.dataForWeixin)
      wx.onMenuShareTimeline(this.dataForWeixin)
      wx.onMenuShareQQ(this.dataForWeixin)
      wx.onMenuShareWeibo(this.dataForWeixin)
    },
    bind: function () {
      var that = this
      if (wx && wx.ready) {
        wx.ready(function(){
          that._addListener()
        })
      }
    },
    ini: function (appId, nonceStr, timestamp, signature) {
      var s = document.createElement('script')
      s.src = '//res.wx.qq.com/open/js/jweixin-1.0.0.js'
      document.body.appendChild(s)
      if (!window.wx || typeof appId === '' || typeof timestamp === '' || typeof nonceStr === '' || typeof signature === '') {return}
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
      })
      this.bind()
    }
  }
  
  window.wechatShare = wechatShare
  
}())



