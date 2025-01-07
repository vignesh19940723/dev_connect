const express = require('express');
const connectDB = require('./utils/database')
const {adminAuth} = require('./middleware/auth');
const app = express();
const bodyParser = require('body-parser');
const User = require('./models/user.schema');
const port = 9999;
app.use(bodyParser.json());

//API signup user
app.post('/signup',async (req,res) =>{
  const user = new User({
    firstName: 'Virat',
    lastName:"Kholi",
    email:"vtrat@gmail.com",
    skills:["angular","node"],
    password: 'virat@23'
    
  })

  try{
    await user.save();
    res.send('user added successfully')
  }catch(e){
    res.status(500).send('error while adding user')
  }

})

connectDB().then(() =>{
  console.log("Database connection succesfull");
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}).catch((e)=>{
  console.log("Error while connecting to DB")
})

