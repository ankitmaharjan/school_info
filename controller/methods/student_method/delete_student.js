"use strict";
(()=>{
  const delete_student = require("../../sql/Sql_student/delete_soft_student")
    module.exports = async(req, res, next) => {
        try {
            const output2=await delete_student(req.params);
            if(output2 == true){
                
                res.status(200).send("delete Succesful");
    
            }
            else{
                res.status(400).send("deleted unsuccess");
            }
           
            
        } catch (error) {
            console.log(error)
           // res.status(400).send("delete unsuccesful")
        }
    }   
})()