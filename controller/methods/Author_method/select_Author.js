"use strict";
(()=>{
    const select_author = require('../../sql/Sql_author/read_author')
    module.exports = async(req, res, next) => {
        try {
            const output2=await select_author(req.query);
            
            
            res.status(200).send(output2);
        } catch (error) {

            console.log(error)
        }
          
            
    }
})()