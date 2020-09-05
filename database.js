const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("./configs/dbConfig.json")[env];

module.exports = {
  async checkAuthentication() {
    let sequelize;
    if (config.use_env_variable) {
      sequelize = new Sequelize(process.env[config.use_env_variable], config);
      try {
        await sequelize.authenticate();
        console.log("DB connection has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
    } else {
      sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
      );
      try {
        await sequelize.authenticate();
        console.log("DB connection has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
    }
  },
};
