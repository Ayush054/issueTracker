const {Schema, model, Types} = require('../connection');

const schemaObj=new Schema({
    name:String,
    mobile: String, 
    age : Number,
    email : String,
    password: String,
    team : {type : Types.ObjectId ,  ref : 'teams'}
})

module.exports = model('users', schemaObj);
