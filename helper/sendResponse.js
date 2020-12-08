const sendResponseMessage = (statusCode, status, data, req, res, next) => {
  res.status(statusCode).json({
    Status: status,
    data: data,
  });
};

module.exports = sendResponseMessage;
