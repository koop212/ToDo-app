const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get everything from "todo" table from db
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "todo"`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in GET route', error)
            res.sendStatus((500));
        });
});

// Post tasks in todo table
router.post('/', (req, res) => {
    console.log('show task in route', req.body);
    let queryText = `INSERT INTO "todo" ("tasks")
                    VALUES ($1);`;
    pool.query(queryText, [req.body.tasks])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error in POST route', error);
        res.sendStatus(500);
    });
});

// Update tasks
router.put('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Show id of tasks.', id);
    let queryText = `UPDATE "todo" SET "tasks" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [req.body.tasks, id])
    .then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error in PUT route', error);
        res.sendStatus(500);
    });
});

// Delete tasks
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Show id in delete', req.params.id);
    let queryText = `DELETE FROM "todo" WHERE "tasks"."id" = $1;`;
    pool.query(queryText, [id])
    .then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error in DELETE route', error);
        res.sendStatus(500);
    });
})

module.exports = router;