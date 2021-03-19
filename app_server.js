const express = require('express');
const app = express();
app.listen(3000, ()=> {console.log('Listening port is 3000')});
app.use(express.static('PUBLIC'));
//const server = http.createServer((req, res)=> {
  //  if(req.url === '/'){
    //    res.write('Hello World');
      //  res.end();
   // }
//});
// server.on('connection', (socket) => {
//     console.log("new connection--")
//})
//server.listen(3000);

//console.log('Listening port is 3000');