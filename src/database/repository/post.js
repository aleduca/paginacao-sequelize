const { post, user } = require('../models');
const { paginate } = require('./paginate');

exports.posts = async function (request) {
  try {
    paginate.setLimit(5);
    paginate.setRouteInSearch(request);
    paginate.setCurrentPage(request.query['page']);
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
