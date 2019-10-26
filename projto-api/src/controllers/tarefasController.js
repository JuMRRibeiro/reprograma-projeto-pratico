const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}
exports.getById = (req, res) => {
    const id = req.params.id
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    res.status(200).send(tarefa)
}
exports.getNome = (req, res) => {
    const nomeColaborador = req.params.nomeColaborador
    const nome = tarefas.filter(nome => nome.nomeColaborador == nomeColaborador)
    // nome.map(tarefas => nome.push(tarefas.nome))

    res.status(200).send(nome)
    console.log(nome)
}
exports.getConcluidos = (req, res) => {
    const concluido = req.params.concluido
    const concluidos = tarefas.filter(e => e.concluido == "true")
    // tarefa.map(tarefas => concluido.push(tarefas.concluido))

    res.status(200).send(concluidos)
    console.log(concluido)
}
exports.getIncluidos = (req, res) => {
    const dataInclusao = req.params.dataInclusao
    const incluidos = tarefas.filter(e => e.dataInclusao == incluidos)
  
    res.status(200).send(incluidos)
    console.log(dataInclusao)
}
