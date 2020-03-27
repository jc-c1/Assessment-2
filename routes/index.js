 // Load express
 const express = require('express');
 const path = require('path')
 const todoDb = require("../data/todo")
 // Create our express app
 var router = express.Router();

 let viewObject = {
  todos: todoDb.getAll(),
  message: "",

}

router.get('/', (req,res)=>{
    if (viewObject.todos.length<1){
      viewObject.message = "There is no To Dos!"
    } else {viewObject.message = ""
  console.log(todoDb.getAll())}
    res.render('index', viewObject)
})

router.post("/addTodo",
(req,res) => { 
  req.body.done = false
  todoDb.getAll().push(req.body)
console.log(todoDb.getAll())
res.redirect('/')

})

router.delete("/", (req,res) => {


})


module.exports = router


