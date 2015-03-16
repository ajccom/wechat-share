# WECHAT SHARE

一个用于微信分享的小工具

------------------------

## 使用方法

### 初始化wechat-share

```
wechatShare.ini(appid, nonceStr, timestamp, signature);
```

- appid: 公众号ID/应用ID;
- nonceStr: 生成签名的随即串;
- timestamp: 生成签名的时间戳;
- signature: 生成的签名;

#### 微信的JS SDK使用过程中，不仅需要公众号ID、设置安全域名，还需要后台帮忙用一个随机串和时间戳，通过SHA1算法生成签名（[查看文档](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html#.E6.AD.A5.E9.AA.A4.E4.B8.89.EF.BC.9A.E9.80.9A.E8.BF.87config.E6.8E.A5.E5.8F.A3.E6.B3.A8.E5.85.A5.E6.9D.83.E9.99.90.E9.AA.8C.E8.AF.81.E9.85.8D.E7.BD.AE)），在初始化时需要将用于生成签名的随机串、时间戳以及生成的签名给到初始化函数。

### 更新分享内容

想要更改分享内容，执行update即可

```
wechatShare.update({
  imgUrl: '...',
  title: '...',
  ...
});
```

参数中可配置项：

key | value(默认值) | 说明
---- | ---- | ----
appId | 空 | 帐号ID
imgUrl | http://tips.wechat.com/wechatportal/img/logo.png | 图片链接
link | location.href | 分享地址
title | I get the wechat-share.js, share to u. | 分享标题
desc | wechat share, good job! | 分享的文案
success | 空函数 | 分享成功后的回调
cancel | 空函数 | 取消分享后的回调

***建议`title`和`desc`填写一致的内容***

### 检测是否在微信中

```
wechatShare.isInWechat();
```

返回布尔值

***主要用于判断是否在微信中，再向后台请求签名***

--------------------------------------------

***wechat-share.js在检查wx对象不存在的时候会加载微信1.0.0版本JS文件***

--------------------------------------------

### END