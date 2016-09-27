    var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    app = express();
    const PORT = 8080;
    
    https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    }, app).listen(PORT);
    console.log('Running on http://localhost:' + PORT);
    app.get('/', function (req, res) {
      res.header('Content-type', 'text/html');
      return res.end('<h1>Hello, Secure World!</h1>');
    });
