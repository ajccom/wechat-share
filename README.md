# WECHAT SHARE

һ������΢�ŷ����С����

## �鿴DEMO

![](qr.png)

------------------------

## ʹ�÷���

1. ��ʼ��wechat-share

```
wechatShare.ini();
```

��Ҳ������ini������ֱ�Ӵ���`appId`��

2. ���·�������

```
wechatShare.update({
  img: '...',
  title: '...',
  ...
});
```

�����п������
|| *key* || *value(Ĭ��ֵ)* || *˵��* ||
|| appId || �� || ѡ�����ݣ�Ĭ��Ϊ�� ||
|| img || http://tips.wechat.com/wechatportal/img/logo.png || ͼƬ���� ||
|| img_width || 215 || ͼƬ��� ||
|| img_height || 80 || ͼƬ�߶� ||
|| url || location.href || �����ַ ||
|| title || I get the wechat-share.js, share to u. || ������İ� ||
|| desc || wechat share, good job! || ������İ� ||
|| callback || null || ��������Ļص� ||

***ǿ�ҽ���`titile`��`desc`��дһ�µ�����***

--------------------------------------------

### END