const http = require ('http');

http.createServer((req,res) => {
    res.write('HolaMundo')
    res.end()
})
    .listen(8080);

console.log('listen puerto 8080')
