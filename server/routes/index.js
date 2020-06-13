const post = require("./post")

module.exports = (app)=>{
    app.use('/goods',post)
}