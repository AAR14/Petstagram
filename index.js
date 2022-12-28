const http = require('http')

const requestListener = (request,responsive)
=> {
    response.send('hii')
}
const server = http.createServer(requestListener);

server.listen(5000,()=>{
    console.log('server running on port 5000')
})