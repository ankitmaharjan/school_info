"use strict";
(() => {
  module.exports = async () => {
    try {
      const sqlString = require("sqlString");
      const helper = require("../../../common/index");
      //const output=await helper.mysqlHelper.query("Select * from students where id="+search);

      let baseQuery = `SELECT 
        a.author_name,
        a.address,
        b.book_name,
        b.publisher,
        CONCAT(s.firstName, s.lastName) AS fullname,
        t.username,
        t.phone
    FROM
        books as b
       INNER JOIN
        students AS s ON b.student_id=s.id
            INNER JOIN
        teachers AS t ON b.teacher_id=t.id
    INNER JOIN
    authors as a ON b.author_id=a.id
    
    where 1=1
    `;

      let formatedQUery = sqlString.format(baseQuery);
      const output = await helper.mysqlHelper.query(formatedQUery);

      // const [mainQuery] = await helper.mysqlHelper.query(baseQuery);

      // let filterQuery = ` AND  where phone= ${mainQuery.filter.phone}`;

      // mainQuery = baseQuery + filterQuery;

      // console.log(mainQuery);

      return output;
    } catch (error) {
      console.log(error);
    }
  };
})();
