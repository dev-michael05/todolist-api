const validate = (schema, propriedade = 'body' ) => {
  return (req, res, next)=>{
    
    const { error, value } = schema.validate(req.body)
    
    if( error ) return res.status(400).json(error.message.replace(/"/g,''));
    
    req[propriedade] = value
    
    next()
  }
}

module.exports = validate