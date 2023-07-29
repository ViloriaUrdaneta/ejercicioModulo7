const db = require('../config/db')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
    host: db.HOST,
    dialect: db.dialect,
    operatoAliases: false,
    pool: {
        max: db.max,
        min: db.min,
        acquire: db.acquire,
        idle: db.idle 
    }
})

const database = {}

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.estudiantes = require('./estudiante.model')(sequelize, Sequelize);
database.cursos = require('./curso.model')(sequelize, Sequelize);

database.estudiantes.belongsToMany(database.cursos, {
    through: 'estudiante_curso',
    as: 'cursos',
    foreignKey:'estudiante_id'
})
database.cursos.belongsToMany(database.estudiantes, {
    through: 'estudiante_curso',
    as:'estudiantes',
    foreignKey: 'curso_id',
})


module.exports = database;
