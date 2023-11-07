const UserModel = require("./model");

async function addUser(user) {
  console.info("[database-users] Salvando Novo user", user);
  user.insertionTime = new Date().getTime();
  const userInstance = new UserModel(user);
  return userInstance.save();
}

async function addManyUsers(users = []) {
  let enrichedUsers = users.map((i) => ({
    ...i,
    insertionTime: new Date().getTime(),
  }));
  const schemaArray = enrichedUsers.map((i) => new UserModel(i));
  await UserModel.insertMany(schemaArray, console.log);
}

async function findByProperty(key, value) {
  if (!key) {
    console.info("[database-users] Return all users..");
    let data;
    try {
      data = await UserModel.find({});
    } catch (err) {
      console.error("erro find : ", err);
    }
    return data;
  }
  return UserModel.findOne({ [key]: value });
}

async function getAllUsers() {
  return findByProperty();
}

async function getUserByEmail(email) {
  return findByProperty("email", email);
}

module.exports = {
  addUser,
  addManyUsers,
  getAllUsers,
  getUserByEmail,
};
