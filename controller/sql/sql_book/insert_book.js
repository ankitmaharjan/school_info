"use strict";
const helper = require("../../../common/index");
(()=>{
        module.exports=async(call)=>{
            try {
                let myDate = new Date().getTime(); //epoch value
                const { v4: uuidv4 } = require('uuid'); //super key
                //let query = "INSERT INTO teachers (username,email,password,phone,created_at) VALUES ('"+username+"','"+email+"','"+password+"','"+phone+"','"+myDate+"')";
                const output = await helper.mysqlHelper.query(`INSERT INTO books (book_name,uuid,publisher,price,created_at,teacher_id,student_id,author_id) VALUES ('${call.book_name }','${uuidv4()}','${call.publisher}','${call.price}',${myDate},'${call.teacher_id}','${call.student_id}','${call.author_id}')`)
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