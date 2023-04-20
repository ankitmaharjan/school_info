"use strict";
(()=>{
    const create_user = require('../../controller/sql/create_teacher')
    const helper = require("../../controller/helper/index")
    module.exports = async(req, res, next) => {
        try {
            const password = req.body.password;
            const hashedPassword = await helper.hasher.hashpassword(password);
            //const created_at = new Date().getTime();
            // const updated_at = new Date().toDateString();
            const requestObject = {
                username: req.body.username,
                 email: req.body.email,
                 phone: req.body.phone,
                 password: hashedPassword,
              };
            // const username = req.body.username;
            // const email = req.body.email;
            // const phone = req.body.phone;
            // const password = req.body.password;
            //let output = await helper.validateHelper.uservalidation(username,email,password,phone);
            let output = await helper.validateHelper.uservalidation(requestObject);
            if(output == true){
                const output2=await create_user(requestObject);
                //const output2=await create_user(req.body);
                if(output2==true){

                    res.status(201).send({  //created
                        //status: 201, //created
                        success:true,
                        message:"SignUp Succesful"
                    })
                }else{
                    res.status(400).send({
                        //status: 400,  //bad request
                        success:false,
                        message: 'SignUp UnSuccesful'
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