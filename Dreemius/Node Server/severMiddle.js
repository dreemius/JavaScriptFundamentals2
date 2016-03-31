var http = require ('http'),
	fs = require ('fs');

var generateJson = function(data) {
    return JSON.stringify(data);
}

var setResponce = function (resp, data) {
    resp.end(data);
} 
	
var onServer = function(req, resp){
       
    resp.writeHead(200, {'content-type': 'text/html; charset=utf-8'});    
    var setResp = setResponce.bind(null, resp);
	
    if (req.url == '/getDataList') {
        var file = fs.readFileSync('data.js', 'utf8');	
        setResp(file);
    } else {
        setResp(generateJson({test: "property", another: [1,2,3]}));    
    }

}
	
http.createServer(onServer).listen('8081');
