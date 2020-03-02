const { userSchema, taskSchema } = require('../middleware/schema')

const userValidator = (req,res,next) => {
    const { error } = userSchema.validate(req.body);

    if (error) {
        res.status(400).json({error: error.message})
    } else {
        next()
    }
}

const taskValidator = (req,res,next) => {
    const { error } = taskSchema.validate(req.body);

    if (error) {
        res.status(400).json(taskSchema.validate(req.body).error)
    } else {
        next()
    }
}

module.exports = {userValidator,taskValidator};