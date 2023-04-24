"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    


    const create_book = require("../../controller/methods/book_method/create_book");
   


   
 



    router.post('/create_book', create_book);



    module.exports = router;
})()