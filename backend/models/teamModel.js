const {Schema, model, Types} = require('../connection');


const schemaObj=new Schema({
    title:String,
    description: String, 
    createdAt: Date,
    member:String
   
})

module.exports = model('title', schemaObj);
