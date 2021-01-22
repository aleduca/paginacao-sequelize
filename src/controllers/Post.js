const { post, user } = require("../database/models");

const edit = function (request, response) {
  return response.json(request.params["id"]);
};

const store = function (request, response) {
  return response.json(request.body["age"]);
};

const update = function (request, response) {
  return response.json(request.body);
};

const destroy = function (request, response) {
  return response.json(request.params);
};

const show = async function (request, response) {
  try {
    // const data = await post.findAll({
    //   attributes: ["id", "title", "slug"],
    //   include: {
    //     attributes: ["id", "firstName", "lastName"],
    //     model: user,
    //     as: "user",
    //   },
    // });
    // return response.status(200).json(data[0].user.firstName);

    const data = await user.findOne({
      attributes: ["id", "firstName", "lastName"],
      where: {
        id: 3,
      },
      include: {
        attributes: ["id", "title", "slug"],
        model: post,
        as: "posts",
      },
    });

    return response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }

  response.json("show");
};

module.exports = { edit, store, update, destroy, show };
