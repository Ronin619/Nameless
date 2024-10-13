import { Sequelize } from "sequelize";

const name = process.env.DB_USERNAME!;
const password = process.env.DB_PASSWORD!;

const sequelize = new Sequelize("databaseName", name, password, {
  dialect: "postgres",
});
