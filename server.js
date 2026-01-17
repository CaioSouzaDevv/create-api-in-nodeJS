import express from 'express';

const app = express();
app.use(express.json());

app.post('/users', (req, res) => {

    console.log(req);
    res.send('User created');

});

app.get('/users', (req, res) => {
    res.send('Hello World!');

});


app.listen(3000);