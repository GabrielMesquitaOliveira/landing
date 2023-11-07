const mongoose = require("mongoose");
const config = require("config");
console.info(config);

const dbConfig = config.get("PMS.dbConfig.name");

console.info(dbConfig);

async function startDB() {
  mongoose.connect(dbConfig);
}

module.exports = {
  startDB,
};
