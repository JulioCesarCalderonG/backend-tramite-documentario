const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db/dbMysql');


class Derivacionexterno extends Model{};

Derivacionexterno.init({
    fecha:{
        type:DataTypes.CHAR
    },
    tramite:{
        type:DataTypes.INTEGER
    },
    usuarioDerivador:{
        type:DataTypes.STRING
    },
    destinoArea:{
        type:DataTypes.INTEGER
    },
    observacion:{
        type:DataTypes.TEXT
    },
    estado:{
        type:DataTypes.TINYINT,
        defaultValue:0
    }
},{
    sequelize,
    tableName:'derivacion_externo'
});


module.exports = Derivacionexterno