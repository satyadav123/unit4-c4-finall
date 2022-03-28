
const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate")
const todo = require("../models/todo.model")


router.post("", authenticate, async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const todo = await todo.create(req.body)
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
 
})

router.get("", async (req, res) => {
    try{
        const post= await todo.find()
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const todo=await todo.find({_id: req.params.id}).lean()
        return res.status(200).send(todo)
    } catch (error) {
        return res.status(401).send({message : err.message})

    }
});


router.delete('/:id', (req, res, next) => {
    Todo.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(401).json({
          error: error
        });
      }
    );
  });




  router.patch('/:id', async (req, res, next) => {
    try {
     await todo.findByIdAndUpdate(req.params.id, res.request.body);
     res.status = 200;
    } catch (error) {
     res.throw(401, error.message);
    }
   });



  
module.exports = router;