const User = require("../model/user.model");

const get = async (req, res) => {
  const { roleSearch, roleFilter, firstName, lastName, email, mobileNo } = req.query;

  let query = {};

  if (roleFilter && roleSearch) query.$and = [{ role: roleFilter }, { role: new RegExp(roleSearch, "i") }];
  else if (roleFilter) query.role = roleFilter;
  else if (roleSearch) query.role = new RegExp(roleSearch, "i");

  if (firstName) query.firstName = new RegExp(firstName, "i");
  if (lastName) query.lastName = new RegExp(lastName, "i");
  if (email) query.email = new RegExp(email, "i");
  if (mobileNo) query.mobileNo = new RegExp(mobileNo, "i");

  const users = await User.find(query).select("-password");
  res.json(users);
};

module.exports = { get };
