# WECHAT SHARE

һ������΢�ŷ����С����

------------------------

## ʹ�÷���

### ��ʼ��wechat-share

```
wechatShare.ini(appid, nonceStr, timestamp, signature);
```

- appid: ���ں�ID/Ӧ��ID;
- nonceStr: ����ǩ�����漴��;
- timestamp: ����ǩ����ʱ���;
- signature: ���ɵ�ǩ��;

#### ΢�ŵ�JS SDKʹ�ù����У�������Ҫ���ں�ID�����ð�ȫ����������Ҫ��̨��æ��һ���������ʱ�����ͨ��SHA1�㷨����ǩ����[�鿴�ĵ�](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html#.E6.AD.A5.E9.AA.A4.E4.B8.89.EF.BC.9A.E9.80.9A.E8.BF.87config.E6.8E.A5.E5.8F.A3.E6.B3.A8.E5.85.A5.E6.9D.83.E9.99.90.E9.AA.8C.E8.AF.81.E9.85.8D.E7.BD.AE)�����ڳ�ʼ��ʱ��Ҫ����������ǩ�����������ʱ����Լ����ɵ�ǩ��������ʼ��������

### ���·�������

��Ҫ���ķ������ݣ�ִ��update����

```
wechatShare.update({
  imgUrl: '...',
  title: '...',
  ...
});
```

�����п������

key | value(Ĭ��ֵ) | ˵��
---- | ---- | ----
appId | �� | �ʺ�ID
imgUrl | http://tips.wechat.com/wechatportal/img/logo.png | ͼƬ����
link | location.href | �����ַ
title | I get the wechat-share.js, share to u. | �������
desc | wechat share, good job! | ������İ�
success | �պ��� | ����ɹ���Ļص�
cancel | �պ��� | ȡ�������Ļص�

***����`title`��`desc`��дһ�µ�����***

### ����Ƿ���΢����

```
wechatShare.isInWechat();
```

���ز���ֵ

***��Ҫ�����ж��Ƿ���΢���У������̨����ǩ��***

--------------------------------------------

***wechat-share.js�ڼ��wx���󲻴��ڵ�ʱ������΢��1.0.0�汾JS�ļ�***

--------------------------------------------

### END