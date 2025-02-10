const { Pool } = require("pg");

const getDbConfig = () => {
  if (process.env.NODE_ENV === "production") {
    return {
      connectionString: process.env.INTERNAL_DATABASE_URL,
      ssl: { require: true, rejectUnauthorized: false },
    };
  } else {
    return {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    };
  }
};
const pool = new Pool(getDbConfig());

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected successfully");
  }
});

module.exports = pool;
