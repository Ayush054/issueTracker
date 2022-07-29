const express =require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app= express();
const httpServer = createServer(app);
const io = new Server(httpServer, {cors : {origin: ['http://localhost:3000'] } });

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on('SendMsg', (data)=>{
      console.log(data);
  })

});

const port = 5000;

const userRouter= require('./routers/userRouter');
const issueRouter= require('./routers/issueRouter');
const teamRouter= require('./routers/teamRouter');
 
const cors = require('cors');
app.use(express.json()); 

app.use(cors({origin: ['http://localhost:3000'] }))   

app.use('/user', userRouter);
app.use('/issue', issueRouter);
app.use('/team', teamRouter);


app.get('/',(req,res) =>{
    res.send("Response from express");
});

app.get('/home',(req,res) =>{
    res.send("Response from express home");
});


httpServer.listen(port,()=> console.log("server started"));