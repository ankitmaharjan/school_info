(() => {
  module.exports = async (loginUserDetails) => {
    try {

      const helper = require("../../../common/index");
      const JWT = require("jsonwebtoken");
      const output = await helper.mysqlHelper.query(`Select Password from students where email='${loginUserDetails.email}'`);
      let pass = output[0][0].Password;
      if (loginUserDetails.Password==pass) {
        const token = await JWT.sign({ }, process.env.JWT_SECRET, {
          expiresIn: "14d",
               });
  
               return token;
        
      } else {
        return "login failed";;
      }
  } catch (error) {

    console.log(error);
    
   }
   
  };
})();
