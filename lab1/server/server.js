const express = require('express');

const {
    SQL_HOST,
    SQL_USER,
    SQL_PASSWORD,
    SQL_DATABASE
} = process.env;

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: SQL_HOST,
        port: 5432,
        user: SQL_USER,
        password: SQL_PASSWORD,
        database: SQL_DATABASE,
    },
});

const app = express();
app.use(express.json())

app.get('/', async (req, res) => {
    const todos = await knex('todo').select('*');
    res.send(todos);
});

app.get('/:id', async (req, res) => {
    const { id } = req.params;
    const todo = await knex('todo').select('*').where('id', id).first();
    res.send(todo);
});

app.post('/', async (req, res) => {
    const { content } = req.body;
    const todo = await knex('todo').insert({ content }).returning('*');
    res.send(todo);
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const todo = await knex('todo').where('id', id).del('*');
    res.send(todo);
});

app.listen(3001, () => {
    console.log('server is listening on port 3001')
});