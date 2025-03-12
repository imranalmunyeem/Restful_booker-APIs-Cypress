const fs = require("fs");

function getConfigByEnv(env) {
  const configFile = fs.readFileSync("config/environments.json");
  const config = JSON.parse(configFile);
  return config[env] || config["prod"];
}

module.exports = {
  e2e: {
    baseUrl: getConfigByEnv(process.env.ENV).baseUrl,
    video: false,
    supportFile: "cypress/support/index.js",
  }
};
