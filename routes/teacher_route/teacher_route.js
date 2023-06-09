"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    const create_teacher = require("../../controller/methods/teacher_method/register_teacher")
    const read_all_teacher = require("../../controller/methods/teacher_method/read_Allteacher");
    const delete_teacher = require("../../controller/methods/teacher_method/delete_teacher");
    const search_teacher = require("../../controller/methods/teacher_method/read_singleTeacher");
    const update_teacher = require("../../controller/methods/teacher_method/update_teacher");
    const select_teacher = require("../../controller/methods/teacher_method/read_teacher");
    const login_teacher = require("../../controller/methods/teacher_method/login_teacher");
    const { isTeacher, requireSignIn } = require("../../middleware/authentication_teacher");
    const testController = require("../../controller/methods/teacher_method/test_Controller_Teacher");


    
    
    router.post('/create_teacher',create_teacher);
    router.get('/get_all_record_teacher',read_all_teacher);
    router.put('/delete_record_teacher/:uuid',delete_teacher);
    router.get('/read-single_teacher/:uuid',search_teacher);
    //router.put('/update_record_teacher/:uuid',update_teacher);
    //router.put('/update_record_teacher/:uuid',requireSignIn, update_teacher);
    router.put('/update_record_teacher/:uuid',requireSignIn, isTeacher, update_teacher);
    router.get('/select_data_teacher',select_teacher);
    router.post('/login_teacher',login_teacher);
 
    //test routes
    router.get("/test_teacher/:uuid", requireSignIn, isTeacher, testController);




    module.exports = router;
})()