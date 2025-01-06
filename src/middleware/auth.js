 const adminAuth = (req,res,next)=>{
  const token = req.body?.xyz
    console.log('middleware here');
      if( token === 'xyz'){
        next();
      }else{
        res.status(401).send('Unauthorized');
      }
    
  };

  module.exports = {adminAuth};

  