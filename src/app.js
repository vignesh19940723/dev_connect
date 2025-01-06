const express = require('express');
const {adminAuth} = require('./middleware/auth');
const app = express();
const bodyParser = require('body-parser')
const port = 9999;


app.use(bodyParser.json());



app.post('/login', (req, res) => {
  try{
    const {username,password} = req.body;
    if(username === 'admin' && password === 'admin'){
      res.send('Login Success');
    }else{
      res.status(401).send('Login Failed');
    }
  }catch(e){
    res.status(500).send(e)
  }
});

app.get('/profile',adminAuth,(req, res) => {
  try{
    res.send('First Node.js API with Express');
  }catch(e){
    res.status(500).send(e)
  }
});

app.use('/',(err,req,res,next)=>{
  if(err){
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
