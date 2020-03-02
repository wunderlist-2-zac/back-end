module.exports = (req,res,next) => {

    const regexStart = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/gm
    const regexEnd = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/gm

    if(regexStart.test(req.body.start) && regexEnd.test(req.body.end)){
        next()
    } else {
        res.status(500).json({message:'regex didnt pass'})
    }


}