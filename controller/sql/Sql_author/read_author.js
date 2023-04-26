"use strict";
(() => {
  module.exports = async (req) => {
    try {
      const sqlString = require("sqlString");
      const helper = require("../../../common/index");
      //const output=await helper.mysqlHelper.query("Select * from students where id="+search);

      //inner join
      //   let baseQuery = `SELECT
      //     a.author_name,
      //     a.address,
      //     b.book_name,
      //     b.publisher,
      //     b.price,
      //     CONCAT(s.firstName, s.lastName) AS fullname,
      //     t.username,
      //     t.phone
      // FROM
      //     books as b
      //    INNER JOIN
      //     students AS s ON b.student_id=s.id
      //         INNER JOIN
      //     teachers AS t ON b.teacher_id=t.id
      // INNER JOIN
      // authors as a ON b.author_id=a.id

      // where 1=1
      // `;

      //left join
      //     let baseQuery = `SELECT
      //     a.author_name,
      //     a.address,
      //     b.book_name,
      //     b.publisher,
      //     b.price,
      //     CONCAT(s.firstName, s.lastName) AS fullname,
      //     t.username,
      //     t.phone
      // FROM
      //     books as b
      //    LEFT JOIN
      //     students AS s ON b.student_id=s.id
      //         LEFT JOIN
      //     teachers AS t ON b.teacher_id=t.id
      // LEFT JOIN
      // authors as a ON b.author_id=a.id

      // where 1=1
      // `;

      //mysql case
      //      let baseQuery =`SELECT book_name, price,
      // CASE WHEN price >300 THEN 'The price is greater than 300'
      // WHEN price=250 THEN 'The price is equal to 250'
      // ELSE 'price below 300'
      // END AS book_name_price
      // FROM books`;
      //collection of join
      //     let baseQuery = `SELECT
      //     a.author_name,
      //     a.address,
      //     a.phone,
      //     b.book_name,
      //     b.publisher,
      //     b.price,
      //     t.username,
      //     t.phone,
      //     CONCAT(s.firstName, ' ', s.lastName) AS fullname,
      //     CASE
      //         WHEN b.price > 300 THEN 'The price is greater than 300'
      //         WHEN b.price = 250 THEN 'The price is equal to 250'
      //         ELSE 'price below 300'
      //     END AS book_name_price
      // FROM
      //     books AS b
      //         INNER JOIN
      //     students AS s ON b.student_id = s.id
      //         RIGHT JOIN
      //     teachers AS t ON b.teacher_id = t.id
      //         LEFT JOIN
      //     authors AS a ON b.author_id = a.id

      // where 1=1
      // `;
      let baseQuery = `SELECT
      a.author_name,
      a.address,
      b.book_name,
      b.publisher,
      b.price,
      CONCAT(s.firstName,' ', s.lastName) AS fullname,
      t.username,
      t.phone
  FROM
      books as b
     LEFT JOIN
      students AS s ON b.student_id=s.id
          LEFT JOIN
      teachers AS t ON b.teacher_id=t.id
     LEFT JOIN
    authors as a ON b.author_id=a.id
`;

      if (req.filter.price) { // filter by price
        let filterQuery = ` where 1=1 and b.price= ${req.filter.price}`;
        baseQuery += filterQuery;
      }

      if (req.filter.id) {  //filter by id
        let filterQuery = ` where 1=1 and s.id= ${req.filter.id}`;
        baseQuery += filterQuery;
      }
      // if (req.filter.uuid) {  //filter by uuid
      //   let filterQuery = ` where 1=1 and b.uuid= ${req.filter.uuid}`
      //   baseQuery += filterQuery;
      // }

      let formatedQUery = sqlString.format(baseQuery);
      const [output] = await helper.mysqlHelper.query(formatedQUery); //destructuring
      
      //   const [mainQuery] = await helper.mysqlHelper.query(baseQuery);
      //  const prices=(mainQuery.map((item)=>{
      //   return(
      //       item.price
      //     )
      //   }))
      //let filterQuery = ` AND  where a.phone= ${mainQuery.filter.phone}`;
      // mainQuery = baseQuery + filterQuery;
      //eturn filterQuery;
      return output;
    } catch (error) {
      console.log(error);
    }
  };
})();
