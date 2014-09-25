"use strict"
;(function () {
  var extend = function (a, b) {
    var i = '';
    b = b || {};
    for (i in b) {
      a[i] = b[i];
    }
    return a;
  };
  
  var wechatShare = {
    dataForWeixin: {
      appId: '',
      img: 'http://tips.wechat.com/wechatportal/img/logo.png',
      img_width: '215',
      img_height: '80',
      url: location.href,
      title: 'I get the wechat-share.js, share to u.',
      desc: 'wechat share, good job!',
      callback: null
    },
    update: function (arg) {
      this.dataForWeixin = extend(this.dataForWeixin, arg || {});
    },
    _shareFriend: function () {
      WeixinJSBridge.invoke('sendAppMessage', {
        'appid': this.dataForWeixin.appid,
        'img_url': this.dataForWeixin.img,
        'img_width': this.dataForWeixin.img_width,
        'img_height': this.dataForWeixin.img_height,
        'link': this.dataForWeixin.url,
        'desc': this.dataForWeixin.desc,
        'title': this.dataForWeixin.title
      }, this.dataForWeixin.callback);
    },
    _shareTimeline: function () {
      WeixinJSBridge.invoke('shareTimeline', {
        'img_url': this.dataForWeixin.img,
        'img_width': this.dataForWeixin.img_width,
        'img_height': this.dataForWeixin.img_height,
        'link': this.dataForWeixin.url,
        'desc': this.dataForWeixin.desc,
        'title': this.dataForWeixin.title
      }, this.dataForWeixin.callback);
    },
    _shareWeibo: function () {
      WeixinJSBridge.invoke('shareWeibo', {
        'content': this.dataForWeixin.desc,
        'url': this.dataForWeixin.url
      }, this.dataForWeixin.callback);
    },
    _addListener: function () {
      var that = this;
      WeixinJSBridge.on('menu:share:appmessage', function(argv){
        that._shareFriend();
      });
      WeixinJSBridge.on('menu:share:timeline', function(argv){
        that._shareTimeline();
      });
      WeixinJSBridge.on('menu:share:weibo', function(argv){
        that._shareWeibo();
      });
    },
    bind: function () {
      var that = this;
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
          that._addListener();
        }, false);
      } else {
        document.attachEvent('WeixinJSBridgeReady', function onBridgeReady() {
          that._addListener();
        });
        document.attachEvent('onWeixinJSBridgeReady', function onBridgeReady() {
          that._addListener();
        });
      }
    },
    ini: function (appId) {
      this.update({
        appId: typeof appId === 'string' ? appId : '' 
      });
      this.bind();
    }
  };
  
  window.wechatShare = wechatShare;
}());