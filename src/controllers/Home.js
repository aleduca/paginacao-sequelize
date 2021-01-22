const { MASTER_DIR } = require('../helpers/constants');
const { posts } = require('../database/repository/post');

const index = async function (request, response) {
  try {
    const data = await posts(request);

    return response.render('home', {
      layout: MASTER_DIR,
      title: 'Home',
      data,
    });
  } catch (error) {
    console.log(error);
  }
  // request.session.name = "Alexandre";
};

module.exports = { index };
