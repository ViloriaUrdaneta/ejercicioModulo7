module.exports = (sequelize, DataTypes) => {
    const Estudiante = sequelize.define('estudiantes',{
        nro_identificacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Estudiante
}