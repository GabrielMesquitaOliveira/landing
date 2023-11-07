function fillHeaders() {
  let response = {
    headers: {},
  };
  response.headers["Access-Control-Allow-Methods"] = "OPTIONS,POST,GET";
  response.headers["Access-Control-Allow-Headers"] =
    "Authorization,Content-Type";
  response.headers["Access-Control-Allow-Origin"] = "*";
  return response;
}

function tokenExpiredResponseType(response) {
  return {
    ...response,
    statusCode: 401,
    body: "Token is expired!",
  };
}

function unauthorizedCallResponseType(response) {
  return {
    ...response,
    statusCode: 401,
    body: "Unauthorized call",
  };
}

function okResponseType(response, data) {
  return {
    ...response,
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

function notFoundResponseType(response) {
  return {
    ...response,
    statusCode: 404,
    body: "Unable to call DynamoDB. Table resource not found.",
  };
}

function missingRequiredParamters(response) {
  return {
    ...response,
    statusCode: 400,
    body: "Missing required parameters",
  };
}

module.exports = {
  tokenExpiredResponseType,
  missingRequiredParamters,
  unauthorizedCallResponseType,
  okResponseType,
  notFoundResponseType,
  fillHeaders,
};
