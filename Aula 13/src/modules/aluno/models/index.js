const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/configDb');

const Aluno = sequelize.define(
  'Aluno',
  {
    matricula: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Forneça um email válido!'
        },
        len: {
          args: [10, 60],
          msg: 'O email deve ter no mínimo 10 caracteres e no máximo 60!'
        }
      }
    },
    senha: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        len: {
          args: [10, 10], // define exatamente 10 caracteres
          msg: 'A senha deve ter exatamente 10 caracteres!'
        }
      }
    },
    turma_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'turmas', // Nome da tabela referenciada (ajuste conforme necessário)
        key: 'id'
      }
    }
  },
  {
    tableName: 'aluno', // nome da tabela no banco
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
  }
);

// exemplo de uso opcional para debug
console.log(Aluno === sequelize.models.Aluno); // true
