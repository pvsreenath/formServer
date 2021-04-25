const mongoose  = require("mongoose")

const workshopSchema = new mongoose.Schema({
    knowledge:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    areaCode:{type:String,required:true},
    address:{type:Object,require:true},
    subjects:{type:Object,required:true},
    occupation:{type:String,required:true},
    company:{type:String,required:true},
    position:{type:String,required:true},
    workshopDate:{type:String,required:true},
    paymentMethod:{type:String,required:true},
    comments:{type:String,required:true},
    source:{type:String,required:true},
})

const workshopModel = mongoose.model("Workshop",workshopSchema)

module.exports = workshopModel;