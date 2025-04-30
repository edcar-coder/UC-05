const sequelize  = require('../../../config/confiDb');

const { DataTypes } = require('sequelize');


    const ProfessorModel = sequelize.define( 'ProfessorModel',{
   matricula: {
        type: DataTypes.CHAR(5),
        primaryKey: true,
        validate: {
            is:{
                args:/^[A-Za-z]\d{4}$/
                ,
                    msg: 'A matricula deve conter uma letra e quatro números!' 
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
                msg: 'A senha deve ter 8 e 12 caracteres.'

            },
            is:{
                args:/^(?=,*[a-z])(?=,*[A-Z])(?=<|*\d)(?=,*[@#$%&*!])[A-Za-z\d@#$%&*!]{8,}$/,
                msg: 'A senha deve ter pelo menos 8 caracterees, incluindo uma letra maiuscula'
              }
            }
        },
        curso:{
            type: DataTypes.STRING(60),
            alloowNull: true,
            validate:{
                len:{
                    args: 
                    msg
                }
            }
        },
       
     tableName: 'professor',
     createdAt: 'criando_em',
     updatedAt: 'atualizando_em'
    }
  );

  module.exports = ProfessorModel