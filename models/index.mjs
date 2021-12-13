import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import initBugController from './bugs.mjs';
import initFeatureController from './features.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// add your model definitions to db here
db.Bug = initBugController(sequelize, Sequelize.DataTypes);
db.Feature = initFeatureController(sequelize, Sequelize.DataTypes);

// Add relationship of tables
db.Bug.belongsTo(db.Feature);
db.Feature.hasMany(db.Bug);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
