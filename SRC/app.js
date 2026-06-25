const express=require("express");

const app=express();
//different methods of request
app.use("/test",(req,res)=>{
    res.send("Heloo duniya walo");
})
app.get("/hello",(req,res)=>{
    res.send({"Message":"Hello Friends"});
})
app.post("/hello",(req,res)=>{
    res.send({"Message":"Hello Posts Friends"});
})
app.put("/hello",(req,res)=>{
    res.send({"Message":"Hello updated  Friends"});
})
app.delete("/hello",(req,res)=>{
    res.send({"Message":"Hello deleted Friends"});
})
app.patch("/hello",(req,res)=>{
    res.send({"Message":"Hello patchi Friends"});
})
//Depends on what version of express you are using, you can use app.all() to handle all HTTP methods for a specific route. For example:
// app.all("/hello",(req,res)=>{
//     res.send({"Message":"Hello all Friends"});
// })
// //ways of call an api
// app.get("/ab?c",(req,res)=>{
//     res.send({"Message":"Hello ?????? Friends"});
// })//b -> optional// /abc,/ac
// app.get("/ab+c",(req,res)=>{
//     res.send({"Message":"Hello + Friends"});
// })//b -> one or more// /abc,/abbc,/abbbc
// app.get("/ab*cd",(req,res)=>{
//     res.send({"Message":"Hello Friends"});
// })// * -> zero or more// /abcd,/abxcd,/abRANDOMcd,/ab123cd
// app.get("/ab(cd)?e",(req,res)=>{
//     res.send({"Message":"Hello Friends"});
// })// ? -> optional// /abe,/abcde
// app.get("/a/",(req,res)=>{
//     res.send({"Message":"Hello Friends"});
// })// /a/,/ab/,/abc/,/abcd/
// //Regular Expression Route
// app.get(/^\/ab[0-9]+$/, (req, res) => {
//     res.send("Only Numbers");
// });// ^ -> start with /ab[0-9]+ -> one or more numbers $ -> end with
// //Route Parameters
// app.get("/users/:id", (req, res) => {
//     res.send(req.params.id);
// });//users/123 -> 123
// app.get("/users/:id/books/:bookId", (req, res) => {
//     res.send(req.params);
// });//users/123/books/456 -> {id: "123", bookId: "456"}
// //Optional Parameters
// app.get("/user/:id?", (req, res) => {
//     res.send(req.params);
// });//users/123 -> {id: "123"} /users/ -> {}
// //Route Parameter with Regex
// app.get("/user/:id(\\d+)", (req, res) => {
//     res.send(req.params);
// });//users/123 -> {id: "123"} /users/abc -> 404
// //Wildcard
// app.get("/*splat", (req, res) => {
//     res.send(req.params.splat);
// });//users/abc/def -> abc/def
// //Multiple Paths
// app.get(
//     ["/home", "/index", "/main"],
//     (req, res) => {
//         res.send("Home");
//     }
// );// /home,/index,/main -> Home
// //Regex Routes
// app.get(/^\/api\/v\d+\/users\/\d+$/, (req, res) => {
//     res.send("API Route");
// });// ^ -> start with /api/v\d+ -> version number /users/\d+ -> user ID $ -> end with
// //Query Parameters
// app.get("/products", (req, res) => {
//     console.log(req.query);
// });// /products?category=electronics&price=1000 -> {category: "electronics", price: "1000"}


//Middleware

const {adminAuth} = require("./middlewares/auth");
app.use("/users",adminAuth);

app.get("/users",(req,res,next)=>{
    console.log("users get api");
    //res.send({"message":"users get api"});
    next();
})

//we can also do this 
// app.get("/users",adminAuth,(req,res,next)=>{
//     console.log("users get api");
//     //res.send({"message":"users get api"});
//     next();
// })

app.get("/users/getdata",(req,res,next)=>{
    console.log("users post api");
    res.send({"message":"users post api"});
    //next();
})


//error handling
app.get("/getuserdata",(res,req)=>{
    try{
        res.status(200).send({"message":"get data successfully"});
    }
    catch(err){
        res.status(500).send({"message":"Sorry something went wrong"});
    }
})
app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send({"message":"Sorry something went wrong"})
    }
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});