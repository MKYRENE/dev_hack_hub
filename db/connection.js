const { Sequelize } = require('sequelize');

// require('dotenv').config();


const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL, {
  dialect: 'mysql'
})
: new Sequelize('dev_hack_hub', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;