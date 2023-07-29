const db = require('./app/models')


db.sequelize.sync({
    force: true
}).then(() => {
    console.log('Base de datos creada con éxito.')
})