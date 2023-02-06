const express=require("express");
const bodyparse=require("body-parser")
const user=require("../operation/user-operation")
require("../config/database").connect();
const app=express();
const cors=require("cors")
app.use(bodyparse.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyparse.json({ limit: '50mb', extended: false }
))
app.use(cors())
app.get("/", async (req, res) => {
    console.log("client connected")
    res.status(201).json({ message: "connected"});
  });

  app.get('/user', user.findBook)
app.post('/user',user.createBook)


app.listen(8081, () => {
    console.log('Server running ');
});
