'use strict';

// import {createTask} from '../services/taskService';
// import {createUser} from '../services/userService';
// import {findTask} from '../services/taskService';
// import {updateTask} from '../services/userService';
// import {removeTask} from '../services/userService';

import {removeTask, updateTask, findTask, createTask} from '../services/taskService';

export default (app) => {

   app.post('/task', (req, res) => {
        console.log(req.body);

       createTask(req.body, (err, data) => {
            if(!err){
                console.log(data, 'was created.');
            }
            res.json(data);
        });
    });

   app.post('/user', (req, res) => {
        createUser(req.body, (err, data) => {
            if(!err){
                console.log(data, 'was created.');
            }
            res.json(data);
        });
    });

   app.get('/tasks/:id', (req, res) => {
        findTask(req.params.id, (err, data) => {
            if(!err){
                console.log(req.params.id, 'was found.');
            }
            res.json(data);
        });
    });

   app.put('/tasks/:id', (req, res) => {
        updateTask(req.params.id, (err, data) => {
            if(!err){
                console.log(req.params.id, 'was updated.');
            }
            res.json(data);
        });
    });

   app.delete('/tasks/:id', (req, res) => {
        removeTask(req.params.id, (err, data) => {
            if(!err){
                console.log(req.params.id, 'was deleted.');
            }
            res.json(data);
        });
    });

}