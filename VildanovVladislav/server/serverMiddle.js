var http = require ('http'),
	fs = require ('fs'),
	url = require ('url');

var readFile = function(resp, fileName, contentType){
	fs.readFile(fileName, 'utf-8', (err, data) => {
		resp.writeHead(200, {'content-type': contentType + '; charset=utf-8'});
	})
}

var onServer = function(req, resp){

	var request = url.parse(req.url, true);
	var action = request.pathname;

	var read = readFile.bind(null, resp);

	if (req.url == '/'){
		read('index.html', 'text/html');
	} else if (req.url == '/getDataList'){
		read('data.js', 'text/html');
	} else {
		read("." + action, 'text/javascript');
	}
		

}

http.createServer(onServer).listen('8081');