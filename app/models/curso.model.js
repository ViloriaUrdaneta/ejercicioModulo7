module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('cursos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Curso
}