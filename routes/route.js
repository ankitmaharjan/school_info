"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    const create_teacher = require("../controller/methods/register_teacher")
    const read_data = require("../controller/methods/read_record");
    const delete_data = require("../controller/methods/delete_record");
    const search_data = require("../controller/methods/read_singleRecord");
    const update_record = require("../controller/methods/update_record");
    const select_data = require("../controller/methods/read_data");
    const loginController = require("../controller/methods/login");
    
    router.post('/sign-up',create_teacher);
    router.get('/get-all-record',read_data);
    router.get('/read-single/:uuid',search_data);
    router.get('/select_data',select_data);
    //router.delete('/delete-record/:id',delete_data);
    router.put('/delete-record/:uuid',delete_data);
    router.put('/update-record/:uuid',update_record);
    router.post('/login',loginController);


    module.exports = router;
})()