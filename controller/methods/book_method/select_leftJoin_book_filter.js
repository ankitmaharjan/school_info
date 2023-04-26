"use strict";

(()=>{
    const read_filter = require('../../sql/sql_book/read_book_leftJoin_filter');
    
    module.exports = async(req, res, next) => {
        try {
            const output2=await read_filter(req.query);
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