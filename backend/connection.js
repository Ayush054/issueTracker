const mongoose = require('mongoose');

const dbName = "mytestdb";
const dbUrl=`mongodb+srv://ayushagrawal1:Ankush12345@cluster0.zlzaw2v.mongodb.net/${dbName}?retryWrites=true&w=majority`

//const res = await mongoose.connect(dbUrl);


mongoose.connect(dbUrl)
.then((result) => {
    console.log('connected to MongoDB');
}).catch((err) => {
console.error(err);    
});

module.exports= mongoose;