const router = require('express').Router();
const Tasks = require('./tasks-model');

// List All Tasks
router.get("/", (req, res) => {

  Tasks.list()
  .then(tasks => {
    res.status(200).json(tasks);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Internal Server Error - Listing Tasks'})
  })
});


// Add New Task
router.post("/", (req, res) => {
  
  const task = req.body
  
  if(task.title && task.startDate && task.endDate){
    Tasks.add(task)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Internal Server Error - Adding Tasks'})
    })
  } else {
    res.status(400).json({message: 'Insufficient Information'})
  }
});


// Deleting Task
router.delete("/:id", (req, res) => {
  const id = req.params.id

  Tasks.remove(id)
  .then(count => {
    res.status(200).json(count)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Internal Server Error - Deleting'})
  })
});


// Update Task
router.put("/:id", (req, res) => {
  const id = req.params.id
  const change = req.body
  
  if(task.title && task.startDate && task.endDate){
    Tasks.update(id,change)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Internal Server Error - Updating'})
    })
  } else {
    res.status(400).json({message: 'Insufficient Information'})
  }
});


module.exports = router;