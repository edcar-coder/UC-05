const express = require('express')
const router = express.Router();
const AlunoController = require('../controllers/aluno.controller')

//LISTAR alunos - http://localhost:3000/secretario/listar-alunos
router.get('/secretario/lista-alunos', AlunoController.listar-alunos)

// Listar aluno por matricula - http://localhost:3000/secretario/listar-aluno/a9458741
router.get('/secretario/listar-aluno/:matricula', AlunoController.listarPorMatricula)

//Criar aluno - http://localhost:3000/secretario/criar-aluno
router.post('secretario/criar-aluno', AlunoController.criarAluno)

//Criar editar - http://localhost:3000/secretario/editar-aluno
router.put('secretario/editar-aluno', AlunoController.editarAluno)

// Deletar aluno por amtricula - http://localhost:3000/secretario/deletar-aluno/:matricula
router.put('secretario/deletar-aluno/:matricula', AlunoController.deletarAlunoPorMatricula)

//Deletar alunos - http://localhost:3000/secretario/deletar-alunos
router.delete('/secretario/deletar-alunos', AlunoController.deletarTodosAlunos)

module.exports = router