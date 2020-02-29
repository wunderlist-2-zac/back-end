module.exports = (req,res,next) => {

    if(!req.body){
        res.status(400).json({message:'No Message Content Found!'})
    } else {
        next();
    }
}