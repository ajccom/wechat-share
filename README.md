# WECHAT SHARE

一个用于微信分享的小工具

## 查看DEMO

![](qr.png)

------------------------

## 使用方法

1. 初始化wechat-share

```
wechatShare.ini();
```

你也可以在ini方法中直接传入`appId`。

2. 更新分享内容

```
wechatShare.update({
  img: '...',
  title: '...',
  ...
});
```

参数中可配置项：
|| *key* || *value(默认值)* || *说明* ||
|| appId || 空 || 选填内容，默认为空 ||
|| img || http://tips.wechat.com/wechatportal/img/logo.png || 图片链接 ||
|| img_width || 215 || 图片宽度 ||
|| img_height || 80 || 图片高度 ||
|| url || location.href || 分享地址 ||
|| title || I get the wechat-share.js, share to u. || 分享的文案 ||
|| desc || wechat share, good job! || 分享的文案 ||
|| callback || null || 分享弹出后的回调 ||

***强烈建议`titile`和`desc`填写一致的内容***

--------------------------------------------

### END