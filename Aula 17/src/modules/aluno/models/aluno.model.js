const sequelize  = require('../../../config/confiDb');

const { DataTypes } = require('sequelize');


    const AlunoModel = sequelize.define( 'AlunoModel',{
   matricula: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        validate: {
            is:{
                args:/^[a-zA-Z]\d{8}$/,
                    msg: 'A matricula deve começar com uma letra e ter quatro números em sequência!' 
            }
        }
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isAlpha:{
            msg: 'É permitido apenas letras!'
          }
        }
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        alloowNull: false, // caso erro, é aqui
        validate: {
            is:{
            args:/^[a-zA-Z0-9._%+-]+@edum\.rn\.sena\.br$/,
            msg: 'E-mail invalido! O email deve ser pertencer ao dominio @rn.senac.br'
          }
        }
      },
      senha: {
        type: DataTypes.STRING(12),
        allowNull: false,
        validate:{
            len:{
                args: [8, 12],
                msg: 'A senha deve ter no minino 8 e no maximo 12 caracteres.'

            },
            is:{
                args:/^(?=,*[a-z])(?=,*[A-Z])(?=<|*\d)(?=,*[@#$%&*!])[A-Za-z\d@#$%&*!]{8,}$/,
                msg: 'A senyha deve ter pelo menos 8 caracterees, u=incluindo um a letra maiuscula'
              }
            }
        },
        turma_id:{
            type: DataTypes.CHAR(9),
            alloowNull: false,
            references:{
                model: 'turma',
                key: 'turma_cod'

            }
        }
    },
    {
     tableName: 'aluno',
     createdAt: 'criando_em',
     updatedAt: 'atualizando_em'
    }
  );

  module.exports = AlunoModel