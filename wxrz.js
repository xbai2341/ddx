/******************************

脚本名称:   wxrz
下载地址：商店
脚本作者：ios151
更新时间：2023年10月12日 02:45
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?://pay.wechatpay.cn/realname/realnameinfopage?.* url script-response-body JS/wxrz.js

[mitm] 

hostname = pay.wechatpay.cn

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "created_at": 1697047524398,
  "locked": 0,
  "paths": [
    {
      "pathMode": 1,
      "schema": "ALL",
      "host": "",
      "rules": [
        {
          "redirectCode": "code302",
          "regularAction": "modifyBody",
          "matchKey": "已认证\\(.*\\)",
          "mode": "regular",
          "headerAction": "add",
          "mockFileType": 0,
          "tempFile": "",
          "serverFile": "",
          "mockType": "local",
          "regularExpression": 1,
          "type": "response",
          "localFile": "",
          "modifyValue": "已认证\\(*小树儿)"
        }
      ],
      "query": "",
      "port": "",
      "regrexPath": "^https?:\/\/pay.wechatpay.cn\/realname\/realnameinfopage?.*",
      "method": "ALL",
      "path": ""
    }
  ],
  "updated_at": 1697049755531.9541,
  "mitm": 1,
  "enabled": true,
  "name": "微信认证"
}

$done({body : JSON.stringify(objc)});

