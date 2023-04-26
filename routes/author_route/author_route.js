"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    
    const create_author = require("../../controller/methods/Author_method/create_Author");
   
    router.post('/Insert_author', create_author);



    module.exports = router;
})()