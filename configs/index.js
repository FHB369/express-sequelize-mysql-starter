const envMode = process.env.NODE_ENV;

let configs;

if (envMode === "production") {
  //For Production
  configs = require(`./config.prod`);
} else if (envMode === "development") {
  //For Development
  configs = require(`./config.dev`);
}

module.exports.getServerConfig = function () {
  return configs.server;
};
