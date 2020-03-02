const JoiBase = require('@hapi/joi');
const JoiDate = require('@hapi/joi-date');

const Joi = JoiBase.extend(JoiDate);

const userSchema = Joi.object().keys({
    username: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
})

const taskSchema = Joi.object().keys({
    title: Joi.string().required(),
    start: Joi.string().pattern(new RegExp(`/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/`)),
    end: Joi.string().pattern(new RegExp(`/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/`))
})

const dateSchema = Joi.date().timestamp()

module.exports = {
    userSchema,
    taskSchema,
    dateSchema
}

// module.exports = schema;