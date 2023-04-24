"use strict";
((bookValidationHelper)=>{
   
    //validationHelper.uservalidation = async(username,email,password,phone) =>{
        bookValidationHelper.bookValidation = async(requestObject) =>{
            try {
                if (requestObject.book_name == "" || requestObject.publisher == "" || requestObject.price == "" || requestObject.teacher_id == "" || requestObject.student_id == "" || requestObject.author_id == "") {
                    return false
                  }
                 
                 
            } catch (error) {
                console.log(error);
            }
       
    };
})(module.exports);