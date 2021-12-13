//var body = $response.body; // 声明一个变量body并以响应消息体赋
//body=body.replace(/vipLevel\":\d/g,'vipLevel":1').replace(/is_vip\":\d/g,'is_vip":1').replace(/code\":\d+/g,'code":0');

//body=body.vip.(/expired_at\":\d/g,'expired_at":39680043112);

/*
潮汐助手vip--
*/
let obj = JSON.parse($response.body);
obj.data.vip_info.is_vip = "1",
obj.data.vip_info.expire_time = "4999999999",
obj.data.vip_info.left_time = "4999999999",

$done({body: JSON.stringify(obj)});


//$done(body);  //结束修改修改
