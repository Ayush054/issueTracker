const mongoose = require('mongoose');

const dbName = "mytestdb";
const dbUrl=`mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/IssueTracker?retryWrites=true&w=majority`

//const res = await mongoose.connect(dbUrl);


mongoose.connect(dbUrl)
.then((result) => {
    console.log('connected to MongoDB');
}).catch((err) => {
console.error(err);    
});

module.exports= mongoose;