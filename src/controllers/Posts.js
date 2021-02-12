const { MASTER_DIR } = require('../helpers/constants');
const { post, user, comment, Sequelize } = require('../database/models');

// inner join - required
// Subquery - subquery
// join dentro de outro join - include

const index = async function (request, response) {
  try {
    const data = await post.findAll({
      subQuery: false,
      attributes: {
        exclude: ['title'],
      },
      include: [
        {
          attributes: ['id', 'firstName', 'lastName'],
          model: user,
          as: 'user',
        },
        {
          // required: true,
          attributes: ['id', 'comment'],
          model: comment,
          as: 'comments',
          include: [
            {
              attributes: ['firstName', 'lastName'],
              model: user,
              as: 'user',
            },
          ],
        },
      ],
      group: ['post.id', 'comments.id'],
    });

    response.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { index };
