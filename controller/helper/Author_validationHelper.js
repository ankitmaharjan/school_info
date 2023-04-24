"use strict";
((validationHelper)=>{
    //validationHelper.uservalidation = async(username,email,password,phone) =>{
        validationHelper.Authorvalidation = async(AurthorInfo) =>{
            try {
                if (AurthorInfo.author_name== "" || AurthorInfo.address == "" || AurthorInfo.phone == "" || AurthorInfo.book_id=="") {
                    return false
                  }
                 
                  else if(AurthorInfo.phone.length <= 9 ){
                      return false
                  }
                  else{
                      return true;
                  }
            } catch (error) {
                console.log(error);
            }
       
    };
})(module.exports);