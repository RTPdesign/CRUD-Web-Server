'use strict'

import Task from '../models/Task';

export let createTask = (task, next) => {
    Task.create(task, next);
};

// Creates a User
export let createUser = (user, next) => {
    User.create(user, next);
};

//? export let findTask = (err, task) => {
//     Task.find(err, task);
// };

// Finds a task
export let findTask = (taskId, next) => {
    Task.findById(taskId, (next));
};
// Task.find({}, (err, task) => {
//   if (err) throw err;
//   console.log(task);
// });

// Find and Update
// find the description Learn, update it to Teach
export let updateTask = (taskId, next) => {
    Task.findByIdAndUpdate(taskId, { '$set':{description: 'Teach' }}, (next));
};
// Task.findOneAndUpdate({ description: 'Learn' }, { description: 'Teach' }, (err, task) => {
//   if (err) throw err;
//   // the updated description is returned
//   console.log(task);
// });

// Find and Remove
// find the task with Learn delete it
export let removeTask = (taskId, next) => {
    Task.findByIdAndRemove(taskId, (next));
};
// Task.findOneAndRemove({ taskId: '5913aed5afeecd260dbf3876' }, (err) => {
//   if (err) throw err;
//   console.log('User deleted!');
// });