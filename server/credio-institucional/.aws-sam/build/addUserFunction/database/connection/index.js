const mongoose = require("mongoose");
const config = require("../config");
const dbConfig = config.PMS.dbConfig.name;

console.info(dbConfig);
async function startDB() {
  try {
    mongoose.connect(dbConfig);
  } catch (err) {
    console.error("err: ", err);
  }
}

module.exports = {
  startDB,
};
