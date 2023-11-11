const Loaders = require("../../database");
const { addUser } = require("../../database/users");
const {
  fillHeaders,
  okResponseType,
  notFoundResponseType,
} = require("../../response-types");

exports.addUserHandler = async (event) => {
  if (event.httpMethod !== "POST") {
    throw new Error(
      `postMethod only accepts POST method, you tried: ${event.httpMethod} method.`
    );
  }

  console.info("received:", event);

  const body = JSON.parse(event.body);
  let response = fillHeaders();
  await Loaders.start();

  try {
    await addUser(body);
    response = okResponseType(response, body);
  } catch (ResourceNotFoundException) {
    response = notFoundResponseType(response);
  }

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
