"use strict";
// const helper = require("../../controller/helper/index");
// const login_data = require("../../controller/sql/login_teacher") 
//   //POST LOGIN
// const loginController = async (req, res) => {
//   try {
//    const obj = {
//     email: req.body.email,
//     password: req.body.password
//    }

//     //validation
//     if (!email || !password) {
//       return res.status(404).send({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }
//       //check teacher
//       // let teacherData = await helper.mysqlHelper.query(`select password from teachers WHERE email='${email}'`);
//     //  let sqlQuery = "select password from teachers WHERE email='${email}'";
//     //   let teacherData = await helper.mysqlHelper.query(sqlQuery);
//     let teacherData = await login_data(obj);
    
      
//       if (!teacherData) {
//         return res.status(404).send({
//           success: false,
//           message: "Email is not registerd",
//         });
//       }

//       const match = await helper.hasher.comparePassword(password,teacherData.password);
//     if (!match) {
//       return res.status(401).send({  //unauthorized
//         success: false,
//         message: "Invalid Password",
//       });
//     }  else{
//     res.status(200).send({
//       success: true,
//       message: "login successfully",
//         });
//     }
//   } catch (error) {
//     res.status(401).send({ 
//       //401 means unauthorized
//         success: false,
//       message: "Error in login",
//       error,
//     });
//   }
// };
// module.exports = loginController;

(() => {
  const check_user = require("./../sql/login_teacher")
  const helper = require("../helper/index")
  module.exports = async(req, res, next) => {
    try {
      const obj = {
        email:req.body.email,
        password: req.body.password
      }
     
   
   //   let output = await helper.validateHelper.uservalidation(obj);
       
        const output2 = await check_user(obj);
  
        
            if(output2==true){
              res.status(200).send({
                success:true,
                message: "Login Successful"
            })
            }
            else{
              res.status(400).send({
                success:false,
                message: "Login Unsuccesful"
            })
            }
       
      //  else {
      //   res.status(400).send({
      //     success:false,
      //     message: "Please provide approrpaite email and password"
      // })
      //  }
                
    } catch (error) {
      res.status(401).send({ 
              //401 means unauthorized
                success: false,
              message: "Unauthorized User",
              error,
    });
      
  }
}
})()
