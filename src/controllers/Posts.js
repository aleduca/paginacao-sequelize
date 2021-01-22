const { MASTER_DIR } = require("../helpers/constants");
const { post } = require("../database/models");

const index = async function (request, response) {
  try {
    const posts = await post.findAndCountAll();
    response.json(posts["count"]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { index };
