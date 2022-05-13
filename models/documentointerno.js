const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db/dbMysql');

class Documentointerno extends Model{};


Documentointerno.init({
    codigoDocumento:{
        type:DataTypes.CHAR
    },
    asunto:{
        type:DataTypes.STRING
    },
    fecha:{
        type:DataTypes.CHAR
    },
    descripcion:{
        type:DataTypes.TEXT
    },
    referencia:{
        type:DataTypes.STRING
    },
    estadoFirma:{
        type:DataTypes.TINYINT,
        defaultValue:0
    },
    destino:{
        type:DataTypes.CHAR
    }
},{
    sequelize,
    tableName:'documento_interno',
    timestamps:false
});

module.exports = Documentointerno;