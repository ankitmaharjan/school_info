const JWT = require("jsonwebtoken");
const helper = require("../controller/helper/index");


//Protected Routes based on token
const requireStudent = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
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
                               
//Student access
const isStudent = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    //const teacher = await helper.mysqlHelper.query(`Select * from teachers where uuid='${uuid}'`);
    const student = await helper.mysqlHelper.query(`Select * from students where uuid='${uuid}'`);
    const auth = student[0][0].role;
    if (auth !== 0) {
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
      message: "Error in student middleware",
    });
  }
};


module.exports = { requireStudent, isStudent }