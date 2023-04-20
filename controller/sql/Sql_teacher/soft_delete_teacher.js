"use strict";
(()=>{
    module.exports=async(req, res, next)=>{
      try {
        const helper = require("../../common/index")
        let uuid = req.uuid;
        //const output=await helper.mysqlHelper.query("Select * from students where id="+search);
        let sqlQuery = `Update teachers set is_delete=1 WHERE uuid='${uuid}'`; 
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