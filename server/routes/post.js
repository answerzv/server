const express = require("express");

var  route = express.Router();

const postModel = require("../models/post")

route.get("/",async (req,res)=>{
    try{
        const posts = await postModel.findAll();
        // res.json(posts)
        res.json({
            status:'0',
            msg:'',
            result:{
                count:posts.length,
                list:posts
            }
        })
    }catch(error){
        console.error(error);
        res.status(404).send();
    }
});

route.post('/', async (req,res)=>{
    try{
        const newPost = await postModel.save(req.body);
        // console.log("收到文章",req.body);
        res.status(201).json(newPost);
    }catch(error){
        console.error(error);
        res.status(500).send();
    }
   
})

route.put("/:id",(req,res)=>{
    console.log('收到的参数，文章id 为：',req.params.id);
    console.log('收到请求体，新的文章内容',req.body);

    res.send({id:req.params.id,...req.body});
})

route.delete("/:id",(req,res)=>{
    console.log("收到请求参数, 文章id 为",req.params.id);
    res.status(204).send();
})


module.exports = route;

