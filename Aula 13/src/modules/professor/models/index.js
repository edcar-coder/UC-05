const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/configDb')

const  professor = sequelize.define('professor', {
matricula: {
type: DataTypes.CHAR(8),
primaryKey: true,
validate: {
    is:{
        args: /^[A-Za-z] [0-9]{7}$/,
        msg: 'A matricula deve começar com uma letra e ter mais de sete numeros'
    }
}
},
Nome: {
     type:DataTypes.STRING(100),
     alloNull: false,
     validate:{
        len:{
            args:[100]
        }
     }
},
email:{
    type: DataTypes.STRING(100),
    alloNull: false,
    unique: true,
    validate:{
        isEmail:{
            msg: 'Forneça um e-mail valido!'
        }
    }
},
senha: {
    type: DataTypes.CHAR(100),
    alloNull: false,
    validate:{
        len:{
            args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10}$/,
            msg:'A senha deve ter exatamente 10 caracteres, incluindo'
        }
    }
}
})
module.exports = professor