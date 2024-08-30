import { readdirSync } from "node:fs";
import { basename, dirname } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import Sequelize, { DataTypes } from "sequelize";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = {};

// NOTE: database connection config, edit if you need options
const config = {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

// connect to the database
const sequelize = new Sequelize(process.env.DATABASE_URL, config);

// find all files in ./models/ that end in `.model.js`
const files = readdirSync(__dirname).filter(
  (file) =>
    file.indexOf(".") !== 0 &&
    file !== basename(__filename) &&
    file.slice(-9) === ".model.js"
);

// dynamically import and initialize all models
// model.default is the exported default function
await Promise.all(
  files.map(async (file) => {
    const model = await import(`./${file}`);
    if (!model.default) {
      return;
    }

    const namedModel = model.default(sequelize, DataTypes);
    db[namedModel.name] = namedModel;
  })
);

// call the .associate() method on all models
Object.keys(db).forEach((key) => {
  if ("associate" in db[key]) {
    db[key].associate(db);
  }
});

export { sequelize };

export default db;
