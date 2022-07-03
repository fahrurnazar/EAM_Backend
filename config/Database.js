import { Sequelize } from "sequelize";
/**
 * const db = new Sequelize('postgres://user:pass@example.com:5432/dbname')
 * const db = new Sequelize("postgres://postgres:password@localhost:5432/reactdb");
 */
const db = new Sequelize("reactdb", "postgres", "password", {
  host: "localhost",
  port: 5432,
  dialect: "postgres" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

export default db;
