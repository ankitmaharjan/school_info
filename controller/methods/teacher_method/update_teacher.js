"use strict";
(()=>{
   // const helper = require("../../common/index")
   const updated_teacher = require("../../controller/sql/update_data")
    module.exports = async(req, res, next) => {
        try {
         
    //    let sqlquery = "UPDATE teachers SET username='"+req.body.username+"', email='"+req.body.email+"', password='"+req.body.password+"',phone='"+req.body.phone+"' WHERE id="+req.params.id;
    //    let result = await helper.mysqlHelper.query(sqlquery); 
    //    res.send({
    //     message: "The updated teacher is:",
    //     data: result
    //    })
    
    const obj ={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.password,
        uuid:req.params.uuid            
    }
     
    const output2= await updated_teacher(obj);
    res.status(200).send({
        success:true,
     //status:200,
     message : "Successfully updated data"  
    })            
        } catch (error) {
            res.status(400).send({
                success: false,
                //status: 400,   //bad request   
                message:'Internal Error',
                error
            });
        }
  
           
       
    }
})()