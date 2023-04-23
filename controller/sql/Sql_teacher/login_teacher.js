"use strict";
// (()=>{
//     module.exports=async(call)=>{
//         try {
//             const helper = require("../../common/index")
//             //const output=await helper.mysqlHelper.query("Select * from students where id="+search);
//            const output=await helper.mysqlHelper.query(`Select password from teachers where email='${call.email}'`);
//             return output;     
//         } catch (error) {
//             console.log(error);
//         }
       
//     }
// })()
(()=>{
    module.exports=async(call)=>{
        try {
            const helper = require("../../../common/index")
            const JWT = require("jsonwebtoken");
            const output = await helper.mysqlHelper.query(`Select * from teachers where email='${call.email}'`);
            let pass=output[0][0].password;
            // const match =   helper.hasher.comparePassword(call.password,pass);
            // if(!match){
            //     return "login Failed"
            // }
            // else{
            //     return "Login True"
            // }
            if(call.password==pass){
                  //Creating token
              const token = await JWT.sign({ id: call.id }, process.env.JWT_SECRET, {
                expiresIn: "14d",
                     });

                     return token;
                    
            }
            else{
                return "Login failed"
            }
            // let pass=output[0][0].password;
            // const value = helper.hasher.comparePassword(call.password,pass);
        
            // if(value){
            //     return true;
            // }
            // else{
            //     return false;
            // }
        } catch (error) {
            console.log(error);
        }
       
        
    }
})()