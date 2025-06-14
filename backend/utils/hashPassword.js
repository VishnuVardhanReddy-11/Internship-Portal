const bcrypt = require('bcrypt');

const hash = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10);
  console.log('salt:- ', salt);
  console.log('plainPassword:- ', plainPassword);
  
  
  return await bcrypt.hash(plainPassword, salt);
};

module.exports = hash;
