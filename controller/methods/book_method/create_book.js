"use strict";

(()=>{
    const insert_book = require('../../../controller/sql/sql_book/insert_book')
    const helper = require("../../../controller/helper/index")
    module.exports = async(req, res, next) => {
        try {
           
            const requestObject = {
                book_name: req.body.username,
                 publisher: req.body.email,
                 price: req.body.phone,
                 teacher_id: req.body.teacher_id,
                 student_id: req.body.student_id,
                 author_id: req.body.author_id,
              };
            
            let output = await helper.bookValidationHelper.bookValidation(requestObject);
            if(output == true){
                const output2=await insert_book(requestObject);
            
                if(output2==true){

                    res.status(201).send({  //created
                        //status: 201, //created
                        success:true,
                        message:"Book created Succesfully"
                    })
                }else{
                    res.status(400).send({
                        //status: 400,  //bad request
                        success:false,
                        message: 'Cannot create book'
                    })
                
                }
                }
                else{
                    res.status(400).send({
                        success: false,
                       // status: 400, //bad request
                        message:'Please provide appropriate data'});
                }         
                
        } catch (error) {
            res.status(500).send({
                success: false,
                //status: 500, 
                message:'Internal Error',
                error
            });
              //500 internal server error : The server encountered an internal error or misconfiguration and was unable to complete your request while login into system.
        }
       
    }
})()