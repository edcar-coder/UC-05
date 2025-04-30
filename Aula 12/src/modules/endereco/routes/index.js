const express = require('express')
const EnderecoController = require('../controllers/index')

const router = express.Router()
                                             
                                        
router.get("/endereco", EnderecoController.listarTodos)    // Buscar todos enderecos  http://localhost:3000/endereco  
router.get('/endereco/cep/:cep', EnderecoController.listarEnderecoCep) // Buscar endereco pelo CEP http://localhost:3000/cep/5900000
router.get('/endereco/cidade/:cidade', EnderecoController.listarEnderecoCidade) // Buscar endereco pela cidade //http://localhost:3000/cidade/natal
router.get('/endereco/matricula/:matricula', EnderecoController.listarEndercoMtaricula) 
router.post("/endereco", EnderecoController.criarEndereco)

router.put("/endereco/:matricula", EnderecoController.editar)




module.exports = router




const express = require('express')
const EnderecoController = require('../controllers/index')

const Router = express.Router()

// http:

// Buscar todos enderecos http://localhost:3000/endereco
router.get('/endereco', EnderecoController.listarEnderecos)
//Buscar endereco pelo CEP htt
router.get('/endereco/cep/cep/: cep', EnderecoController.listarEnderecoCEP)
// Buscar endereco pela cidade
router.get('/endereco/cidade/:cidade', EnderecoController.listarEnderecoCidade)
//
router.get('/endereco/aluno/:matricula', EnderecoController.listarEnderecoAluno)

router.post('/endereco', EnderecoController.criarEndereco)

router.put('/endereco/:matricula', EnderecoController.editarEnderecoAluno)


module.exports = router;

