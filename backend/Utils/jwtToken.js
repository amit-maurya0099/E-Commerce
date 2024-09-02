
const sendToken=async(user,statusCode,res)=>{
    const token=await user.generateToken();
    const options={
        expires: new Date(Date.now()+ process.env.COOKIE_EXPIRE *24*60*60*1000),
        httpOnly:false
    }
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        token:token,
        id:user._id
    })

}
module.exports=sendToken;