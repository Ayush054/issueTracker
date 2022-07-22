const {Schema, model, Types} = require('../connection');


const schemaObj=new Schema({
    title:String,
    type: String, 
    assignedBy : {type:Types.ObjectId,ref:"users"},
    assingedTo : {type:Types.ObjectId,ref:"users"},
    createdAt: Date,
    org :String,
    status: String,
    closed:{type:Boolean, default: false}
})

module.exports = model('issues', schemaObj);
