const { post, user } = require('../models');
const { paginate } = require('./paginate');
const Sequelize = require('sequelize');

exports.posts = async function (request) {
  try {
    paginate.setLimit(5);
    paginate.setRequest(request);
    paginate.setOptions({
      attributes: ['id', 'title', 'content'],
    });
    const posts = await paginate.paginate(post);
    const links = paginate.render(posts['count']);

    return {
      posts: posts['rows'],
      links,
    };
  } catch (error) {
    console.log(error);
  }
};

exports.search = async function (request, search) {
  try {
    paginate.setLimit(2);
    paginate.setRequest(request);
    paginate.setOptions({
      attributes: ['id', 'title', 'content'],
      where: {
        [Sequelize.Op.or]: [
          { title: { [Sequelize.Op.like]: `%${search}%` } },
          { content: { [Sequelize.Op.like]: `%${search}%` } },
        ],
      },
    });
    const posts = await paginate.paginate(post);
    const links = paginate.render(posts['count']);

    return {
      posts: posts['rows'],
      links,
    };
  } catch (error) {
    console.log(error);
  }
};
