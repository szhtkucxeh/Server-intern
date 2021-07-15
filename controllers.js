const userSchema = require('./schema');

function controllers(){
    function create(req,res) {
        console.log(req.body);
        console.log("test controller");
        
        if(!req.body.Full_name){
            console.log("error name")
            return res.status(400).send({});
        }
        var aaUser = new userSchema(req.body);
        aaUser.save(function(err,newDoc){
             if(err){
                return res.status(500).send({msg:err})
             }
             return res.status(201).send(newDoc)
             
        })
    }
    function get(req,res) {
        userSchema.findOne({first_name:req.params.first_name}, function(err, avi){
if (err){
}
if (!avi){

}
res.status(200).send(avi);
console.log(avi);
        })
        console.log(req.body);
        
        console.log("test controller");
        
    }      
    return{
        create:create,
        get,
    }
    
}

module.exports = controllers();