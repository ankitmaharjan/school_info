"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    
    const create_author = require("../../controller/methods/Author_method/create_Author");
    const select_author=require("../../controller/methods/Author_method/select_Author");
   
   
    router.post('/Insert_author', create_author);
    router.get('/select_author', select_author);
    
     module.exports = router;
})()