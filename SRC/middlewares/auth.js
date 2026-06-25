const adminAuth=(req,res,next)=>{
    const token="xyz";
    if(token=="xyz"){
        console.log("Authorazed user")
        next();
    }
    else{
        res.status(401).send({"message" : "Unauthorized user"});
    }
}
module.exports={adminAuth};