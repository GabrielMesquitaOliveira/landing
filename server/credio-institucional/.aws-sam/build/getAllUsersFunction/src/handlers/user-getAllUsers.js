const Loaders = require("../../database");
const { getAllUsers } = require("../../database/users");
const { hardcodedPass } = process.env;

const {
  unauthorizedCallResponseType,
  okResponseType,
} = require("../../response-types");

exports.getAllUsersHandler = async (event) => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `getAllItems only accept GET method, you tried: ${event.httpMethod}`
    );
  }
  const { code } = event?.queryStringParameters;
  console.info("received:", event);
  let response;
  if (code !== hardcodedPass) {
    console.info(
      `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
    );
    return unauthorizedCallResponseType(response);
  }

  await Loaders.start();

  try {
    const data = await getAllUsers();
    response = okResponseType(response, data);
  } catch (ResourceNotFoundException) {
    response = unauthorizedCallResponseType(response);
  }

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
