const JWT = require("jsonwebtoken");
const helper = require("../controller/helper/index");


//Protected Routes based on token
const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    //req.params = decode;
    next();
  } catch (error) {
    //console.log(error);
    res.status(401).send({
      success: false,
      //status: 500, 
      message:'Not Authorized',
      error
  });
  }
};
                               
//teacher access
const isTeacher = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    //const teacher = await helper.mysqlHelper.query(`Select * from teachers where uuid='${uuid}'`);
    const teacher = await helper.mysqlHelper.query(`Select * from teachers where uuid='${uuid}'`);
    const auth = teacher[0][0].role;
    if (auth !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
      
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in teacher middleware",
    });
  }
};


module.exports = { requireSignIn, isTeacher }