const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const table = require('./table')
const User = table.User
const Schedule = table.Schedule
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}



db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User
db.Schedule = table.Schedule
User.init(sequelize)
Schedule.init(sequelize)

module.exports = db;
