(() => {
    const check_user = require("../../sql/Sql_student/check_student")

    module.exports = async(req, res, next) => {
        try {
            const requestObject2 = {
                email: req.body.email,
                Password: req.body.Password,
              };
                const response=await check_user(requestObject2);
            if(response!=="login failed"){
                res.status(200).send({
                    Message:"Login Success",
                    token: response
                  });

            }else{
                res.status(200).send({
                    Message:"login Unsuccessful",
                    
                })
            }
            
                //    if(response===true){
                //     res.status(200).send("login sucessful");
                //    }

        } catch (error) {
           console.log(error)
        }

    };
})()