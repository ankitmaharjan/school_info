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
            const helper = require("../../common/index")
            const output = await helper.mysqlHelper.query(`Select * from teachers where email='${call.email}'`);
            let pass=output[0][0].password;
            const match =   helper.hasher.comparePassword(call.password,pass);
            if(match==true){
            return true
            }
            else{
                return false
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