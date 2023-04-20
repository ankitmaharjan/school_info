"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    const create_teacher = require("../controller/methods/teacher_method/register_teacher")
    const read_all_teacher = require("../controller/methods/teacher_method/read_Allteacher");
    const delete_teacher = require("../controller/methods/teacher_method/delete_teacher");
    const search_teacher = require("../controller/methods/teacher_method/read_singleTeacher");
    const update_teacher = require("../controller/methods/teacher_method/update_teacher");
    const select_teacher = require("../controller/methods/teacher_method/read_teacher");
    const login_teacher = require("../controller/methods/teacher_method/login_teacher");

    const create_student = require("../controller/sqlstudent/createStudent");
    const get_all_student = require("../controller/sqlstudent/select_student")
    const update_student = require("../controller/sqlstudent/updatestudent")
    const delete_student = require("../controller/sqlstudent/delete_student")
    const login_student = require("../controller/sqlstudent/login")


    
    
    router.post('/sign-up',create_teacher);
    router.get('/get_all_record_teacher',read_all_teacher);
    router.put('/delete_record_teacher/:uuid',delete_teacher);
    router.get('/read-single_teacher/:uuid',search_teacher);
    router.put('/update_record_teacher/:uuid',update_teacher);
    router.get('/select_data_teacher',select_teacher);
    router.post('/login_teacher',login_teacher);

    router.post('/create_student', userController);
    router.get('/select_student',getAllUser);
    router.put('/update_student/:uuid',getupdate);
    router.put('/delete_student/:uuid',getdelete);
    router.post('/login_student',Login);



    module.exports = router;
})()