"use strict";
(() => {
  const insert_Author = require("../../sql/Sql_author/insert_author");
  const validationHelper = require("../../../common/index");
  module.exports = async (req, res, next) => {
    try {
      const AurthorInfo = {
        author_name: req.body.author_name, 
        address: req.body.address,
        phone: req.body.phone,
        book_id:req.body.book_id
      };

      const valdidator = await validationHelper.AuthorvalidateHelper.Authorvalidation(AurthorInfo);
      if (valdidator == true) {
        const output2 = await insert_Author(AurthorInfo);
        if (output2 == true) {
          res.status(201).send("insert Succesful");
        } else {
          res.status(400).send("failed to insert");
        }
      } else {
        res.status(400).send("Please validate Your payload");
      }
    } catch (error) {
      console.log(error);
    }
  };
})();
