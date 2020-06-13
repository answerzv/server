const postCollection = require("../config/mongoDbConnection").getCollection(
    'goods'
    );

    exports.save = async(post)=>{
        try{
            const col= await postCollection();
            const result = await col.insertOne(post);
            return result.ops && result.ops[0];
        }catch(error){
            throw "添加文章到数据库出错"
        }
    }

    exports.findAll = async() =>{
        try{
          const col = await postCollection();
          return col.find({}).toArray();
        }catch(error){
           throw "查询文章出错"
        }
    }