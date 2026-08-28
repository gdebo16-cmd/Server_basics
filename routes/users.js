const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  console.log(req.query.name)
  res.send("User List")
})

router.get('/new', (req, res) => {
  res.render("users/new", { firstName: 'Test' })
})

router
  .post('/', (req, res) => {
    const isValid = true
    if (isValid) {
      users.push({ firstName: req.body.firstName})
      res.redirect(`/users/${users.length - 1}`) //redirects to the correct users page (-1 to match the right array input)
    } else {
      console.log('error')
      res.render('users/new', { firstName: req.body.firstName})
    }
  }) 


router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`)
  })

const users = [
  {
    name: "Jack"
  },
  {
    name: "Sally"
  }
]

router
  .param("id", (req, res, next, id) => {  //param = middleware, needs a next function
    console.log(id)
    req.user = users[id]
    next() //now it will not inf loop
  })

/* router.get('/:id', (req, res) => {
  req.params.id
  res.send(`Get user with ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
  req.params.id
  res.send(`update user with ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  req.params.id
  res.send(`delete user with ID ${req.params.id}`)
}) */

module.exports = router