"use strict";
((hey)=>{
  let pattern = /@gmail.com/;
  hey.uservalidation = async(requestObject) =>{
    try {
      if (requestObject.firstName == ""||requestObject.lastName==""|| requestObject.email=="" || requestObject.Password=="") {
        return  false;
      }
       else if (requestObject.Password.length <=8) {
         return false;
 
     }
       else if (pattern.test(requestObject.email) == false) {
         return false;
       }
       else{
           return true;
       }
      
    } catch (error) {
      console.log(error);
      
    }
  };
})(module.exports);