const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dev_hack_hub', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;