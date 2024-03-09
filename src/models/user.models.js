import mongoose  from "mongoose";


const userSechma = new mongoose.Schema({

    useremil:{
        type:String,
        require:true
    },
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    timestamps:true
})

const User = mongoose.model('User', userSechma);

// export User