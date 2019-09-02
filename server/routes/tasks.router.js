const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "tasks"`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in GET route', error)
            res.sendStatus((500));
        });
});

router.post('/', (req, res) => {
    let queryText = `INSERT INTO "tasks" ("tasks", "due_date")
                    VALUES ($1, $2);`;
    pool.query(queryText, [req.body.tasks, req.body.due_date])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error in POST route', error);
        res.sendStatus(500);
    });
});

module.exports = router;