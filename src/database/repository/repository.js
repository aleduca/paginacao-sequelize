exports.findBy = function (model, field, value) {
  return model.findAll({
    where: {
      [field]: value,
    },
  });
};
