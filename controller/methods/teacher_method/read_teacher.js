"use strict";
(()=>{
    const select_teacher = require('../sql/select_teacher')
    module.exports = async(req, res, next) => {
        try {
            const output2=await select_teacher();
            res.status(200).send({
               // status:200,  //OK
               success:true,
                message: "The teachers are:",
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