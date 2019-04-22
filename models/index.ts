import fs from 'fs';
import paths from 'path';
import { Sequelize, Model, Dialect } from 'sequelize';

import { development } from '../config/config.json';

interface DB {
  [key: string]: typeof Model;
}

const basename = paths.basename(__filename);
const db: DB = {} as DB;

const sequelize = new Sequelize({
  dialect: development.dialect as Dialect,
  storage: development.storage,
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(file => {
    const model = sequelize.import(paths.join(__dirname, file));
    db[model.name] = model;
  });

export default db;
