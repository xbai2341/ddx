

/*
番茄小说vip--
*/
let obj = JSON.parse($response.body);
obj.data.vip_info.is_vip = "1",
obj.data.vip_info.expire_time = "4999999999",
obj.data.vip_info.left_time = "4999999999",

$done({body: JSON.stringify(obj)});


//$done(body);  //结束修改修改
