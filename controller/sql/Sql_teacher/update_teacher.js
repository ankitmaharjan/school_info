"use strict";
(()=>{
    module.exports=async(call)=>{
      try {
        const helper = require("../../common/index")
        let myDate = new Date().getTime();
        //const output=await helper.mysqlHelper.query("Select * from students where id="+search);
        // let sqlQuery = `Update teachers set is_delete=1 WHERE uuid='${uuid}'`; 
        let sqlQuery = `update teachers set username='${call.username}', email='${call.email}',password='${call.password}',phone='${call.phone}',updated_at='${myDate}' where uuid='${call.uuid}' `
        let result = await helper.mysqlHelper.query(sqlQuery); 
        if(result[0].affectedRows>0)
               {
                 return true
                
               } 
      } catch (error) {
        console.log(error);
      }
       
    }
})()