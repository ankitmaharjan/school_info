"use strict";
(()=>{
    module.exports=async()=>{
        try {
            const helper = require("../../../common/index")
            var SqlString = require("sqlstring");
    //      const output=await helper.mysqlHelper.query(`SELECT 
    //      b.book_name AS book_title,
    //      b.price AS book_price,
    //      t.username AS teacher_name,
    //      CONCAT(s.firstName, ' ', s.lastName) AS full_Name,
    //      a.author_name
    //  FROM
    //      books AS b
    //          INNER JOIN
    //      teachers AS t ON b.teacher_id = t.id
    //          INNER JOIN
    //      students AS s ON b.student_id = s.id
    //          INNER JOIN
    //      authors AS a ON b.author_id = a.id
    //      where t.phone=9809332867;`);
   // //where a.address="Gausala";

        //      const output=await helper.mysqlHelper.query(`SELECT 
        //      b.book_name AS book_title,
        //      b.price AS book_price,
        //      t.username AS teacher_name,
        //      CONCAT(s.firstName, ' ', s.lastName) AS Student_full_Name,
        //      a.author_name,
        //      case
        //      when b.price>300 Then "The price over 300",
        //      when
        //      END
        //  FROM
        //      books AS b
        //          INNER JOIN
        //      teachers AS t ON b.teacher_id = t.id
        //          INNER JOIN
        //      students AS s ON b.student_id = s.id
        //          INNER JOIN
        //      authors AS a ON b.author_id = a.id;
        //        `);

            //     const output=await helper.mysqlHelper.query(`SELECT 
            //     b.book_name AS book_title,
            //     b.price AS book_price,
            //     t.username AS teacher_name,
            //     CONCAT(s.firstName, ' ', s.lastName) AS Student_full_Name,
            //     a.author_name,
            //     case
            //     when b.price>300 Then "The price over 300"
            //     when b.price=300 Then "The price equals 300"
            //     else "The price less than 300"
            //     END 
            // FROM
            //     books AS b
            //         INNER JOIN
            //     teachers AS t ON b.teacher_id = t.id
            //         INNER JOIN
            //     students AS s ON b.student_id = s.id
            //         INNER JOIN
            //     authors AS a ON b.author_id = a.id;
                  
            //    `);

      
         const baseQuery=(`SELECT 
         b.book_name AS book_title,
         b.price AS book_price,
         t.username AS teacher_name,
         CONCAT(s.firstName, ' ', s.lastName) AS Student_full_Name,
         a.author_name
     FROM
         books AS b
             INNER JOIN
         teachers AS t ON b.teacher_id = t.id
             INNER JOIN
         students AS s ON b.student_id = s.id
             INNER JOIN
         authors AS a ON b.author_id = a.id;
           `);
        
            const formattedQuery = SqlString.format(baseQuery);  //format ma milaara lagxa
            const [output] = await helper.mysqlHelper.query(formattedQuery); //destructuring
                // let filterQuery =` AND  where book_price= ${output.filter.book_price} `
            // const mainQuery= baseQuery+filterQuery;
            // return mainQuery;
            // console.log(output.map((item)=>{
            //     return(
            //       item.book_price
            //     )
            //   }))
            //   const value = output.map((item)=>{
            //     return(
            //       item.book_price
            //     )
            //   })
              //return value
              const data = output.map((key)=>{
                if(key.book_price>300){
                    return key
                }
              })
              return data
              
            
        } catch (error) {
            console.log(error);
        }
       
    }
})()