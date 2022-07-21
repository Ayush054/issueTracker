const {Schema, model} = require('../connection');

const schemaObj=new Schema({
    name:String,
    mobile: String, 
    age : Number,
    email : String,
    password: String
})

module.exports = model('users', schemaObj);
