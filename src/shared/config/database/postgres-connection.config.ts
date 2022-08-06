// port and host are static configs since database is running on same api's cluster

function createPostgresConnectionConfig() {
  const config = {
    port: 5432,
    host: "database",
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    db_name: process.env.POSTGRES_DB_NAME,
  };

  return config;
}

export default createPostgresConnectionConfig();
