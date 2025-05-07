const sequelize = require('../../../config/configDb');
const { DataTypes } = require('sequelize');

const CursoModel = sequelize.define('CursoModel', {
    cod_curso: {
        type: DataTypes.CHAR(4), 
        primaryKey: true,
        validate: {
            is: {
                args: /^[a-zA-Z]\d{4}$/,
                msg: 'O código deve começar com uma letra e ter quatro números em seguida.'
            }
        }
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isAlpha: {
                msg: 'É permitido apenas letras!'
            }
        }
    },
    descricao: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isAlpha: {
                msg: 'A descrição deve conter apenas letras e espaços.'
            }
        }
    }
}, {
    tableName: 'curso',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
});

module.exports = CursoModel;
