const router = require('express').Router();
const Tasks = require('./tasks-model');
const qa = require('../middleware/qa-middleware');
const {taskValidator} = require('../middleware/validators')
const RegexTask = require('../middleware/task-middleware')

// List All Tasks
router.get("/", (req, res) => {

  Tasks.find()
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

  Tasks.findById(id)
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
  
  if(task.title && task.start && task.end){
    Tasks.add(task)
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

  Tasks.remove(id)
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
  
    Tasks.update(id,change)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Internal Server Error - Updating'})
    })
});


module.exports = router;