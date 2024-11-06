const express = require('express')
const app = express()
const cors=require('cors')
app.use(
   cors({
    origin: "*",
  })
)
app.get('/api',(req,res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})

})


app.listen(5003, ()=>{
    console.log("Server started at port 5003")
})