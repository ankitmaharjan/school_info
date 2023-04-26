"use strict";
(()=>{
    module.exports=async(req)=>{
        try {
           const helper = require("../../../common/index")
            var SqlString = require("sqlstring");

      
         let baseQuery=(`SELECT 
         b.book_name,
         t.username,
         s.id,
         CONCAT(s.firstName, ' ', s.lastName) AS Student_full_Name,
         a.author_name
     FROM
         books AS b
             RIGHT JOIN
         teachers AS t ON b.teacher_id = t.id
             RIGHT JOIN
         students AS s ON b.student_id = s.id
             RIGHT JOIN
         authors AS a ON b.author_id = a.id
              where 1=1
           `);
       


        //    if(req.filter.id )
        //    {
        //       let filterQuery= `AND s.id = ${req.filter.id}`
        //       baseQuery+=filterQuery

        //    }
           
            const formattedQuery = SqlString.format(baseQuery);  //format ma milaara lagxa
          
              
            const [output] = await helper.mysqlHelper.query(formattedQuery); //destructuring
            //   const data = output.filter((key)=>{
            //     if(key.book_price>300){
            //         return key
            //     }
            //   })
            //   return output

            const mainQuery = await output.find({
                where: { id: "4" },
              });
            //   console.log(mainQuery.toJSON());     
            mainQuery.rows = mainQuery.rows.map(record => record.toJSON())
            return mainQuery;
            
            
        } catch (error) {
            console.log(error);
        }
       
    }
})()