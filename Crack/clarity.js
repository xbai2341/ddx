var body = $response.body.replace(/"isVip":false/g, '"isVip":true');
$done({ body });
