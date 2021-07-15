const mongoose = require('mongoose');   
const Schema= mongoose.Schema;    
 


var userSchema = new Schema({
    // first_name: {           
    // type: String,        
    // require : true                      
    // },

    // lest:{
    // type:String
    // },

    // creation_date:{           
    // type: Date
    // } ,      
    
     id_number:{
        type:String
         },
    Full_name:{
        type:String,
        require : true
        },
    passport:{
        type:String
        },
    imgs:{
        type:String
        },
    age:{
        type:String
        },
    Choose:{
        type:String
        },
    city:{
        type:String
        },
    department:{
        type:String
        },
    medical_institution:{
        type:String
        },
    residency:{
        type:String
        },
    years:{
        type:String
        },
    ameil:{
        type:String
        }
    });
    module.exports = mongoose.model("user",userSchema);