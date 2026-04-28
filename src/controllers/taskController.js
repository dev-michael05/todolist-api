const tasks = []

exports.getAll = (req, res) =>{
  res.status(200).json({ data: tasks })
}

exports.getById = (req, res) =>{
  const task = tasks.find( t => t.id === +req.params.id)
  if( !task ) return res.status(404).json({ erro: "tarefa não encontrada" })
  res.status(200).json({ data: task })
}

exports.create = (req, res) =>{
  const task = { id: Date.now(), ...req.body }
  tasks.push(task)
  res.status(201).json({ message: "tarefa criada", data: task })
}

exports.update = (req, res) =>{
  const index = tasks.findIndex( t => t.id === +req.params.id )
  if( index === -1 ) return res.status(404).json({ erro: "tarefa não encontrada" })
  tasks[index] = {...tasks[index],...req.body }
  res.status(200).json({ message: "tarefa atualizada", data: tasks[index] })
}

exports.remove = (req, res) =>{
  const index = tasks.findIndex( t => t.id === +req.params.id )
  if( index === -1 ) return res.status(404).json({ erro: "tarefa não encontrada" })
  tasks.splice(index, 1)
  res.status(200).json({ message: "tarefa removida" })
}