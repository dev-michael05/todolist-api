const Joi = require('joi')

const schema = Joi.object({
  titulo: Joi.string().min(2).max(100).trim().required(),
  status: Joi.boolean().default(false)
})

module.exports = schema