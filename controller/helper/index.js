"use strict";
(() => {
    module.exports = {
        mysqlHelper: require("../../common/mysqlHelper"),
        teacherValidateHelper: require("../helper/teacher_validationHelper"),
        bookValidationHelper: require("../helper/bookValidation"),
        hasher: require("../helper/hasher")
    }
})()