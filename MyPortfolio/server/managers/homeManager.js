const Skill = require("../models/Skills");

exports.getAll = async (qs) => {
  let query = Skill.find();
  const where = qs.where;
   
};
