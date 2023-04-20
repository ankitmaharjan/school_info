"use strict";
(()=>{
    const helper = require("../../common/index")
    module.exports = async(req, res, next) => {
       try {
        let sqlquery = "select * from teachers";
        let result = await helper.mysqlHelper.query(sqlquery); 
        res.status(200).send({
           // status:200,
         message: "The teacher list are:",
         data: result
        })  
       } catch (error) {
        res.status(400).send({   //bad request
            success: false,
            message: "Error in retrieving data",
            error,
          });
      
       }
      
           
       
    }
})()