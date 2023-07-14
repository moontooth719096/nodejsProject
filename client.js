const https = require('https');


//const eventdate = new Date(2021, 10, 28);
//const today = new Date();
//const diffdate = parseInt((eventdate - today.setMonth(today.getMonth() + 1)) / 1000 / 60 / 60 / 24) + 1;
//const printdiffdate = eventdate.getFullYear() + '-' + eventdate.getMonth() + '-' + eventdate.getDate();
const data = 'message=\n填自覺\n';
//const data = 'message=\nP3精英測試時間為：' + printdiffdate + ' \n還有 ' + diffdate + ' 天\n填自覺\nhttps://docs.google.com/forms/d/179J50nVh5NVjCvv4ZpNOQFYtqoXxiy6krOrF3YlOWW0/viewform?edit_requested=true';
//const data = 'message=\n公告：\nP3精英測試活動時間為：' + eventdate + '還有 ' + diffdate + ' 天\n填自覺\nhttps://docs.google.com/forms/d/179J50nVh5NVjCvv4ZpNOQFYtqoXxiy6krOrF3YlOWW0/viewform?edit_requested=true';



const options = {
    hostname: 'notify-api.line.me',
    port: 443,
    path: '/api/notify',
    method: 'POST',
    FormData: data,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer {{linenotifytoken}}',
        'Content-Length': data.length
    }
};
const req = https.request(options, res => {
    res.setEncoding('utf8');
    console.log(`statuscode：${res.statusCode}`);
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});

req.on('error', error => {
    console.error(`失敗 ${error}`)
})

req.write(data)
req.end()