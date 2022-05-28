import Jwt from 'jsonwebtoken'
export const auth=(req,res,next)=>{
    let token=req.header("x-auth-token");
    if(!token) return res.status(400).send("token not found");
    let user=Jwt.verify(token,"someprivatekey");
    req.user=user;
    next();
}
export default auth;
