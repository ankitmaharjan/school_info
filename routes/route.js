"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    const create_teacher = require("../controller/methods/register_teacher")
    const read_teacher = require("../controller/methods/read_record");
    const delete_teacher = require("../controller/methods/delete_record");
    const search_teacher = require("../controller/methods/read_singleRecord");
    const update_teacher = require("../controller/methods/update_record");
    const select_teacher = require("../controller/methods/read_data");
    const login_teacher = require("../controller/methods/login");

    const create_student = require("../controller/methods/student_method/create_student");
    const get_all_student = require("../controller/methods/student_method/select_student")
    const update_student = require("../controller/methods/student_method/update_student")
    const delete_student = require("../controller/methods/student_method/delete_student")
    const login_student = require("../controller/methods/student_method/login_student")


    
    
    router.post('/sign-up',create_teacher);
    router.get('/get-all-record_teacher',read_data);
    router.get('/read-single_teacher/:uuid',search_data);
    router.get('/select_data_teacher',select_data);
    //router.delete('/delete-record/:id',delete_data);
    router.put('/delete-record-teacher/:uuid',delete_data);
    router.put('/update-record-teacher/:uuid',update_record);
    router.post('/login_teacher',loginController);

    router.post('/create_student', create_student);
    router.get('/select_student',get_all_student);
    router.put('/update_student/:uuid',update_student);
    router.put('/delete_student/:uuid',delete_student);
    router.post('/login_student',login_student);



    module.exports = router;
})()