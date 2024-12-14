const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Mohit_Thakur:Mohit%40123@cluster0.ldi4k.mongodb.net/paytmProject");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required: true,
        unique: true,
        trim: true,
        lowercase : true,
        minLength : 3,
        maxLength :30
    },
    firstName : {
        type : String,
        required: true,
        trim: true,
        maxLength:50
    },
    LastName : {
        type : String,
        required: true,
        trim: true,
        maxLength:50
    },
    password:{
        type : String,
        required : true,
        minLength:6 
    }
})

const accountSchema = new mongoose.Schema({
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users',
        required :true,
       
    },
    balance:{
        type : Number,
        required : true,
    
    }
})



const Account = mongoose.model('Accounts',accountSchema)
const User = mongoose.model('Users',userSchema);


module.exports ={
    User,
    Account
};