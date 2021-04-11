const express = require('express');
const bodyParser = require('body-parser');

//this will create a route that is specified for the dishes we mount it in the index file
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
//Creating a crud router for dishes
dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you !');
})
.post((req , res,next)=>{

   res.end('will add the dish: '+ req.body.name + 'with details: '+ req.body.description);

})
.put((req , res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
 })
 .delete((req,res,next)=>{
     res.end('deleting all dishes');
 });

 module.exports = dishRouter;