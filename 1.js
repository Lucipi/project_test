// const http = require('http')
// const server = http.createServer()
// server.on('request', function (req, res) {
//     console.log('Someone visit our web server.');
// })
// server.listen(8080, function () {
//     console.log('server running at http://127.0.0.1:8080');
// })


// const http = require('http')
// const server = http.createServer()
// server.on('request', (req) => {
//     const url = req.url
//     const method = req.method
//     const str = `${url}----${method}`
//     console.log(str);
// })
// server.listen(80, () => {
//     console.log('server running at http://127.0.0.1');
// })


const http = require('http')
const server = http.createServer()


server.on('request', (req, res) => {
    const str = `url=${req.url}---------method=${req.method}`
    console.log(str)
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str + '你好！王先生。')
})

server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
})