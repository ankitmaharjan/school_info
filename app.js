"use strict";
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysqlHelper = require("./common/mysqlHelper");
const mainroute = require("./routes/route")
require('dotenv').config()
//const cors = require("cors");
app.use(bodyParser.urlencoded({extended: true}));
//app.use(cors({ origin: "*" }));

//console.log(process.env.port)
app.use(express.json());
app.use("/",mainroute);

let port = process.env.port || 3000;
app.listen(port, ()=>
{
 mysqlHelper.init();  
console.log(`Server running on the port ${port}`);
}
)

