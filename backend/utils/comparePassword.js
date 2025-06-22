
const bcrypt = require('bcrypt');

const comparePassword = async (enteredPassword, hashedPassword) => {
  console.log("enteredPassword", enteredPassword);
  console.log("hashedPassword", hashedPassword);
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

module.exports.comparePassword = comparePassword;
