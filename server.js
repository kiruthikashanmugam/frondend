const express=require("express")
const app=express();
let router=express.Router()

const {connect}=require("./config/databse.js")
connect();
// For body-parser
const bodyParser = require('body-parser'); //--4
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const cors = require("cors"); //--6
app.use(cors());

const {createbook}=require('./operation/user-operation.js');
const {readbook}=require("./operation/user-operation.js");
const{getdata}=require("./operation/user-operation.js");
const{update}=require("./operation/user-operation.js");
const {deletedata}=require("./operation/user-operation.js");
const {maildata}=require("./operation/user-operation.js")

router.post("/createbook",createbook);
router.post("/readbook" ,readbook);
router.post("/getdata/:_id" ,getdata);
router.post("/update/:_id",update);
router.post("/deletedata/:_id" ,deletedata);
router.post("/maildata",maildata)


app.use("/", router);

app.listen(8000,function(){
    console.log("server running successfully");
})
