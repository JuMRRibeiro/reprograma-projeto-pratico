const express = require('express')
const router = express.Router()
const controller = require('../controllers/tarefasController')


router.get("/", controller.get)
router.get("/:id", controller.getById)
router.get("/:nomeColaborador/buscar", controller.getNome)
router.get("/:concluido/filtrar", controller.getConcluidos)
router.get("/:dataInclusao", controller.getIncluidos)
router.get("/:dataConlusao", controller.getConcluidos)

module.exports = router