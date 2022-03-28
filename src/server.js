const app=require("./index")
const connect = require("./configs/db");

app.listen(3200, async function(){
        try{
                await connect()
                }
                catch(err){
                    console.log(err)
                }
                console.log("listening at 3200")
                
})