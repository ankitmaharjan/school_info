"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    


    const create_student = require("../../controller/methods/student_method/create_student");
    const get_all_student = require("../../controller/methods/student_method/select_student")
    const { isStudent, requireStudent } = require("../../middleware/authentication_student");
    const update_student = require("../../controller/methods/student_method/update_student")
    const delete_student = require("../../controller/methods/student_method/delete_student")
    const login_student = require("../../controller/methods/student_method/login_student")


   
 



    router.post('/create_student', create_student);
    router.get('/select_student',get_all_student);
    router.put('/update_student/:uuid',requireStudent, isStudent, update_student);
    router.put('/delete_student/:uuid',delete_student);
    router.post('/login_student',login_student);



    module.exports = router;
})()