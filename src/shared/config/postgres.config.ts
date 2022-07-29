// port and host are static configs since database is running on same api's cluster

function createPostgresConfig() {
  const config = {
    port: 5432,
    host: "database",
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    db_name: process.env.POSTGRES_DB_NAME,
  };

  if (process.env.ENV === "DEV") {
    config.port = parseInt(process.env.POSTGRES_PORT, 10);
    config.host = "localhost";
  }

  return config;
}

export default createPostgresConfig();
