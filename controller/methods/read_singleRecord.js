"use strict";
(()=>{
    const helper = require("../../common/index")
    module.exports = async(req, res, next) => {
        try {
        //let id = req.params.id;
        let uuid = req.params.uuid;
      // let sqlquery = "SELECT * FROM teachers WHERE id=" + id;
      let sqlquery = `select * from teachers WHERE uuid='${uuid}'`;
       let result = await helper.mysqlHelper.query(sqlquery); 
       res.status(200).send({
       // status:200,
        message: "The selected teacher is:",
        data: result
       })     
        } catch (error) {
            res.status(204).send({   //no content
                success: false,
                message: "Error in retrieving data",
                error,
              });
        }
       
           
       
    }
})()