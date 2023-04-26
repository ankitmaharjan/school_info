"use strict";
(()=>{
    module.exports=async()=>{
        try {
            const helper = require("../../../common/index")
           
         //  const output=await helper.mysqlHelper.query("SELECT books.book_name as book_title, teachers.username as teacher_name, students.firstName as student_name, authors.author_name from books inner join teachers on books.teacher_id = teachers.id   inner join students on books.student_id = students.id     inner join authors on books.author_id = authors.id;");
         //const output=await helper.mysqlHelper.query(`select * from books`);
      // const data = await helper.mysqlHelper.query(`select price from books`);
        
         //     if(Array.isArray(data)){
         //         if(Array.map(key=> key.length>300)){
         //             return output;
         //         }         
         //     }
         
         const output=await helper.mysqlHelper.query(`SELECT b.book_name as book_title, t.username as teacher_name, concat(s.firstName," ",s.lastName) as full_Name, a.author_name 
         from books as b
         inner join teachers as t on b.teacher_id = t.id
         inner join students as s on b.student_id = s.id
         inner join authors as a on b.author_id = a.id;`);


        return output
        
        } catch (error) {
            console.log(error);
        }
       
    }
})()