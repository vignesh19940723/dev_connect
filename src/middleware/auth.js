 const adminAuth = (req,res,next)=>{
  const token = req.body?.xyz;
      if( token === 'xyz'){
        next();
      }else{
        res.status(401).send('Unauthorized');
      }
  };

  module.exports = {adminAuth};

  