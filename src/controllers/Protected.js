const index = function (request, response) {
  delete request.session.name;
  response.send("teste");
};

module.exports = { index };
