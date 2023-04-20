"use strict";
const helper = require("../../common/index");
(()=>{
    // module.exports=async(username,email,password,phone)=>{
        module.exports=async(call)=>{
            try {
                let myDate = new Date().getTime(); //epoch value
                const { v4: uuidv4 } = require('uuid'); //super key
                //let query = "INSERT INTO teachers (username,email,password,phone,created_at) VALUES ('"+username+"','"+email+"','"+password+"','"+phone+"','"+myDate+"')";
                const output = await helper.mysqlHelper.query(`INSERT INTO teachers (uuid,username,email,password,phone,created_at) VALUES ('${uuidv4()}','${call.username }','${call.email}','${call.password}','${call.phone}',${myDate})`)
                //const output=await mysqlHelper.query(query);
                 console.log(output[0].affectedRows>0)
                 if(output[0].affectedRows>0){
                     return true
                 }
                 else{
                     return false
                 }          
            } catch (error) {
                console.log(error);
            }
      
    }
})()