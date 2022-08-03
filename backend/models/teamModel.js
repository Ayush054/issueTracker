const {Schema, model, Types} = require('../connection');


const schemaObj=new Schema({
    title:String,
    description: String, 
    createdAt: Date,
    //members:Array
     members:[{type:Types.ObjectId,ref:"users"}]
})

module.exports = model('teams', schemaObj);
