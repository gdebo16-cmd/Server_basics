const express = require('express');
const app = express();

app.use(express.static('Public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    console.log('Here')
    res.render('index')
    //res.json({ Message: 'Error' }) this will populate an error message
})

const userRouter = require("./routes/users.js") 

app.use("/users", userRouter)

function logger(req, res, next) {
  console.log(req.originalURL)
  next()
}

app.listen(3001)
