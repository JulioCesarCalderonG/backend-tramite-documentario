const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db/dbMysql');
const Codigodocumento = require("./codigodocumento");
const Derivacionexterno = require("./derivacionexterno");
const Derivacioninterno = require("./derivacioninterno");
const SeguimientoInterno = require("./seguimiento-interno");
const Tramiteinterno = require("./tramite-interno");
const Userarea = require("./userarea");

class Area extends Model{}


Area.init({
    nombre:{
        type: DataTypes.STRING
    },
    sigla:{
        type: DataTypes.STRING
    },
    textoNumeracion:{
        type: DataTypes.STRING
    },
    habilitado:{
        type:DataTypes.TINYINT,
        defaultValue:1
    },
    idDireccion:{
        type:DataTypes.INTEGER
    },
},{
    sequelize,
    tableName:'area',
    timestamps:false
});
/* Usuario Area */
Area.hasOne(Userarea,{
    as:'areauser',
    foreignKey:'idArea'
});

Userarea.belongsTo(Area,{
    foreignKey:'idArea',
    sourceKey:'id',
    as:'areauser'
});
/* Codigo documento */
Area.hasMany(Codigodocumento,{
    as:'codigodocumento',
    foreignKey:'idArea'
});
Codigodocumento.belongsTo(Area,{
    foreignKey:'idArea',
    sourceKey:'id'
})
/* Derivacion externo */
Area.hasMany(Derivacionexterno,{
    as:'destinoareaexterno',
    foreignKey:'destinoArea'
});

Derivacionexterno.belongsTo(Area,{
    foreignKey:'destinoArea',
    sourceKey:'id'
});

/* Derivacion interno */
Area.hasMany(Derivacioninterno,{
    as:'destinoareainterno',
    foreignKey:'destinoArea'
});

Derivacioninterno.belongsTo(Area,{
    foreignKey:'destinoArea',
    sourceKey:'id'
});

/* Tramite interno */
Area.hasMany(Tramiteinterno, {
    as:'areatramiteinterno',
    foreignKey:'idArea'
});
Tramiteinterno.belongsTo(Area,{
    foreignKey:'idArea',
    sourceKey:'id'
});

/* Seguimiento Interno */
Area.hasMany(SeguimientoInterno,{
    as:'areaseguimientointer',
    foreignKey:'idDestino'
});
SeguimientoInterno.belongsTo(Area,{
    foreignKey:'idDestino',
    sourceKey:'id'
})
module.exports = Area;