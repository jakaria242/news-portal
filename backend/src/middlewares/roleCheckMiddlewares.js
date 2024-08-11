

const roleCheck = async (req,res,next) =>{
    // console.log(req.userInfo);
    
    const { userInfo } = req;

   if(userInfo.role === 'admin'){
      next()
   }else{
    return res.status(404).json({message: 'Unble to access this api'})
   }
   
}

module.exports = roleCheck