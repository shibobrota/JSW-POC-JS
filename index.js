const http = require('http');
const jws = require('jws');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 
var contents = fs.readFileSync('key.txt', 'utf8');
var pubKeyStream = fs.readFileSync('pubKey.txt','utf8');

var privateKeyStream=contents;
var payloadStream = JSON.stringify( {myKey:"Secret",someOtherKey:"key2"} );
  jws.createSign({
    header: { alg: 'RS256' },
    privateKey: privateKeyStream,
    payload: payloadStream,
  }).on('done', function(signature) {
    // console.log("signature",signature);
    var decodedVal = jws.decode(signature);

    var pubRes = jws.verify(signature, 'RS256', pubKeyStream);
    // console.log("JWS Verify",pubRes);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({signature: signature, decodedVal:decodedVal, verificationStatus: pubRes}));
  });

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
