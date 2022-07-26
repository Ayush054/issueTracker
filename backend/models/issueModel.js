const {Schema, model, Types} = require('../connection');


const schemaObj=new Schema({
    title:String,
    type: String, 
    assignedBy : {type:Types.ObjectId,ref:"users"},
    assingedTo : {type:Types.ObjectId,ref:"users"},
    createdAt: Date,
    org :String,
    status: {type:String, default: "new"},
    closed:{type:Boolean, default: false},
    team:String
})

module.exports = model('issues', schemaObj);
