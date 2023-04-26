
"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    
    const teacher_route = require("../routes/teacher_route/teacher_route");
    const student_route = require("../routes/student_route/student_route");
    const book_route = require("../routes/book_route/book_route");
    const author_route = require("../routes/author_route/author_route");




    router.use("/teacher",teacher_route);
    router.use("/student",student_route);
    router.use("/book",book_route);
    router.use("/author",author_route)

   
    module.exports = router;
})()