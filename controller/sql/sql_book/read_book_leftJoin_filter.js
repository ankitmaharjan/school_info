"use strict";
(()=>{
    module.exports=async(req)=>{
        try {
            const helper = require("../../../common/index")
            var SqlString = require("sqlstring");

      
         let baseQuery=(`SELECT 
         b.book_name,
         t.username,
         CONCAT(s.firstName, ' ', s.lastName) AS Student_full_Name,
         a.author_name
     FROM
         books AS b
             LEFT JOIN
         teachers AS t ON b.teacher_id = t.id
             LEFT JOIN
         students AS s ON b.student_id = s.id
             LEFT JOIN
         authors AS a ON b.author_id = a.id
              where 1=1
           `);
        

        //    if(req.filter.id )
        //    {
        //       let filterQuery= `AND  b.id = ${req.filter.id}`
        //       baseQuery+=filterQuery

        //    }
           if(req.filter.price )
           {
              let filterQuery= `AND  b.price = ${req.filter.price}`
              baseQuery+=filterQuery

           }

        // if(req.filter.phone){
        //     let filterQuery= `AND  t.phone = ${req.filter.phone}`
        //       baseQuery+=filterQuery

        // }
           
           
     



        //    if(req.filter.name )
        //    {
        //       let filterQuery= `AND  where t.name = ${req.filter.name}`
        //       baseQuery+=filterQuery

        //    }
   
            const formattedQuery = SqlString.format(baseQuery);  //format ma milaara lagxa
            const [output] = await helper.mysqlHelper.query(formattedQuery); //destructuring
       
            //   const data = output.filter((key)=>{
            //     if(key.book_price>300){
            //         return key
            //     }
            //   })
              return output
              
            
        } catch (error) {
            console.log(error);
        }
       
    }
})()