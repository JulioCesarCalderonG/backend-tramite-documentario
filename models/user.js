const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db/dbMysql');
const Userarea = require("./userarea");

class Usuario extends Model{}


Usuario.init({
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
    domicilio:{
        type:DataTypes.STRING
    },
    telefono:{
        type:DataTypes.CHAR
    },
    email:{
        type:DataTypes.STRING
    },
    nacimiento:{
        type:DataTypes.CHAR
    },
    habilitado:{
        type:DataTypes.TINYINT,
        defaultValue:1
    },
    dni:{
        type:DataTypes.CHAR
    },
    password:{
        type:DataTypes.STRING
    },
    tipoCargo:{
        type:DataTypes.INTEGER
    }
},{
    sequelize,
    tableName:'usuario_interno'
});

Usuario.hasOne(Userarea,{
    as:'userarea',
    foreignKey:'idUsuario'
});
Userarea.belongsTo(Usuario,{
    foreignKey:'idUsuario',
    sourceKey:'id'
});


module.exports = Usuario;