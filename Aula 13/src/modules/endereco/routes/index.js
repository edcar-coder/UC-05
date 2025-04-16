const express = require("express")
const EnderecoController = require('../controllers/index')

const router = express.Router()
                                             
                                        
router.get("/endereco", EnderecoController.listarEnderecos)    // Buscar todos enderecos  http://localhost:3000/endereco  
router.get('/endereco/cep/:cep', EnderecoController.listarEnderecoCEP) // Buscar endereco pelo CEP http://localhost:3000/cep/5900000
router.get('/endereco/cidade/:cidade', EnderecoController.listarEnderecoCidade) // Buscar endereco pela cidade //http://localhost:3000/cidade/natal
router.get('/endereco/matricula/:matricula', EnderecoController.listarEnderecoAluno) 
router.post("/endereco", EnderecoController.criarEndereco)

router.put("/endereco/:matricula", EnderecoController.editarEnderecoAluno)




module.exports = router

