require("dotenv").config();

const configs = require("./configs");
const server = require("./server");

// Catch unhandled unexpected exceptions
process.on("uncaughtException", (error) => {
  console.error(`uncaughtException ${error.message}`);
  process.exit(1);
});

// Catch unhandled rejected promises
process.on("unhandledRejection", (reason) => {
  console.error(`unhandledRejection ${reason}`);
  process.exit(1);
});

const serverConfig = configs.getServerConfig();
const appServer = server.init(serverConfig);

appServer.listen(process.env.PORT || serverConfig.port, async () => {
  console.log("Server running at: http://localhost:" + serverConfig.port);
});
