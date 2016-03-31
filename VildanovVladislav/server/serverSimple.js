var http = require ('http'),
	fs = require ('fs');

var generateJson = function(data){
	return JSON.stringify(data);
}

var onServer = function(req, resp){

	resp.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
	var json = generateJson({test: "property", another: [1,2,3]});
	resp.end(json);

}

http.createServer(onServer).listen('8081');