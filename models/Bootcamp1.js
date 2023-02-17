const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({

        name:{
            type:String,
            unqiue:true,
            required:[true,"please add a name"],
            length:[50,"name cannot be more than 50 characters"]
        },

            slug:String,

        description:{ 
            type:String,
            required:[true,"please add a description"],
            maxlength:[500,"description cannot be more than 500 characters"]

        },

            website:{
               type:String,
               match:[/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,"please use a valid URL with  HTTPS"]
            },
            phone:{
                type:String,
                maxlength:[20,"phone number cannot be longer than 20 characters"]
            },
            email:{
                type:String,
                match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"please add a valid email"]
            },
            address:{
                type:String,
                required:[true,"please add an address"]
            },
            location:{
                // GeoJSON Point
                type:{
                    type:String,
                    enum:["Point"],
                    
                },
                coordinates:{
                    type:[Number],
                    index:"2dsphere"
                    
                },
                formattedAddress:String,
                street:String,
                city:String,
                state:String,
                zipcode:String,
                country:String
            },
            careers:{
                // Array of strings
                type:[String],
                required:true,
                enum:[
                    "Web Development",
                    "Mobile Development",
                    "UI/UX",
                    "Data Science",
                    "Business",
                    "Other"
                ]
            },
            carrers_other: String,

            averageRating:{
                type:Number,
                min:[1,"Rating must be atleast 1"],
                max:[5,"Rating cannot be more than 5"]

            },
            averageCost:Number,
            photo:{
                type:String,
                default:"no-photo.jpg",
            },
            housing:{
                type:Boolean,
                default:false
            },
            jobAssistance:{
                type:Boolean,
                default:false
            },
            jobGuarantee:{
                type:Boolean,
                default:false
            },
            acceptGi:{
                type:Boolean,
                default:false
            },
            





},{timestamps:true})

mongoose.model("Bootcamp",BootcampSchema)