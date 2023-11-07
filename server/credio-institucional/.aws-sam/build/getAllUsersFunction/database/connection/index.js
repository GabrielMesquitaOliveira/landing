const mongoose = require("mongoose");
const config = require("config");
const dbConfig = config.get("PMS.dbConfig.name");

async function startDB() {
  mongoose.connect(dbConfig);
}

module.exports = {
  startDB,
};
