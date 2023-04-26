"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    
    const create_book = require("../../controller/methods/book_method/create_book");
    const select_book = require("../../controller/methods/book_method/select_book");
    const select_innerJoin_map = require("../../controller/methods/book_method/select_innerJoin__book_map")
    const select_leftJoin_filter = require("../../controller/methods/book_method/select_leftJoin_book_filter")
    const select_rightJoin_filter = require("../../controller/methods/book_method/select_rightJoin_Map")
    const find_one = require("../../controller/methods/book_method/find_One")
   
    router.post('/create_book', create_book);
    router.get('/select_book', select_book);
    router.get('/select_innerJoin_data',select_innerJoin_map);
    router.get('/select_LeftJoin_data',select_leftJoin_filter);
    router.get('/select_rightJoin_data',select_rightJoin_filter);
    router.get('/find_one',find_one);



    module.exports = router;
})()