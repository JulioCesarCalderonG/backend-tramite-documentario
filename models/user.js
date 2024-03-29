const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db/dbMysql');
const Derivacioninterno = require("./derivacioninterno");
const EjemploDocument = require("./ejemplo-documento");
const Tramiteinterno = require("./tramite-interno");
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
    tableName:'usuario_interno',
    timestamps:false    
});
/* Usuario area */
Usuario.hasOne(Userarea,{
    as:'usuarioarea',
    foreignKey:'idUsuario'
});
Userarea.belongsTo(Usuario,{
    foreignKey:'idUsuario',
    sourceKey:'id'
});

/* Derivacion interno */

Usuario.hasMany(Derivacioninterno,{
    as:'usuarioderivacioninterno',
    foreignKey:'usuarioDerivador'
});
Derivacioninterno.belongsTo(Usuario,{
    foreignKey:'usuarioDerivador',
    sourceKey:'id'
});

/* Usuario Ejemplo */

Usuario.hasMany(EjemploDocument,{
    as:'usuarioEjemploDocument',
    foreignKey:'idUsuario'
});

EjemploDocument.belongsTo(Usuario,{
    foreignKey:'idUsuario',
    sourceKey:'id'
})
module.exports = Usuario;