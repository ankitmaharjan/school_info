"use strict";

(()=>{
    const find_value= require('../../sql/sql_book/find_one_value')
    module.exports = async(req, res, next) => {
        try {
            const output2=await find_value();
            res.status(200).send({
               // status:200,  //OK
               success:true,
                message: "The Selected data are:",
                data: output2
            })    
        
        } catch (error) {
            res.status(400).send({   // bad request
                success: false,
                message: "Error in retrieving data",
                error,
              });
        }
           
    }
})()