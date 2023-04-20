"use strict";
(()=>{
    const select_student = require('../../sql/Sql_student/read_Select_student')
    module.exports = async(req, res, next) => {
        try {
            const output2=await select_student();
            
            res.status(200).send(output2);
        } catch (error) {

            console.log(error)
        }
          
            
    }
})()