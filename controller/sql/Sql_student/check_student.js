(() => {
  module.exports = async (loginUserDetails) => {
    const helper = require("../../../common/index");
    const output = await helper.mysqlHelper.query(`Select * from students where email='${loginUserDetails.email}'`);
    let pass = output[0][0].Password;
    if (loginUserDetails.Password==pass) {
      return true;
    } else {
      return false;
    }
  };
})();
