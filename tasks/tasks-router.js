const router = require('express').Router();
const Tasks = require('./tasks-model');
const qa = require('../middleware/qa-middleware');
const {taskValidator} = require('../middleware/validators')
const RegexTask = require('../middleware/task-middleware')

// List All Tasks
router.get("/", (req, res) => {

  const userid = req.decodedToken.subject

  Tasks.find(userid)
  .then(tasks => {
    res.status(200).json(tasks);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Internal Server Error - Listing Tasks'})
  })
});

router.get('/:id', (req,res) => {
  
  const id = req.params.id
  const userid = req.decodedToken.subject

  Tasks.findById(userid,id)
  .then(task => {
    res.status(200).json(task)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Internal Server Error - Task by Id'})
  })
})


// Add New Task
router.post("/",RegexTask,(req, res) => {
  
  const task = req.body
  const userid = req.decodedToken.subject
  task.user_id = userid

  if(task.title && task.start && task.end){
    Tasks.add(userid,task)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err.message)
    })
  } else {
    res.status(400).json({message: 'Insufficient Information'})
  }
});


// Deleting Task
router.delete("/:id", (req, res) => {
  const id = req.params.id

  const userid = req.decodedToken.subject

  Tasks.remove(userid,id)
  .then(id => {
    res.status(200).json(id)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Internal Server Error - Deleting'})
  })
});


// Update Task
router.put("/:id", qa, (req, res) => {
  const id = req.params.id
  const change = req.body

  const userid = req.decodedToken.subject
  
    Tasks.update(userid,id,change)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Internal Server Error - Updating'})
    })
});


module.exports = router;