const errorMessage = {
  400: "Missing required name field",
  404: "Not found"
};

const HttpError = (status, message = errorMessage[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
