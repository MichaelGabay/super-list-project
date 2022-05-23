const  mongoose = require("mongoose");

const missionSchema=new mongoose.Schema({
    data:String,
    flag:{
        type:Boolean,
        default:false
    }
});

exports.missionModel=mongoose.model('missions',missionSchema);