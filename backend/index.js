const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;
const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5987,
    user: 'postgres',
    password: 'Heslo123456'
});

client.connect(err => {
    if (err) {
        console.log("Db connection error.");
        console.log(err);
    }
    else console.log("Successfully connected to Db.");
})


app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("hello from server");
});

app.get('/products', (req, res) => {
    let q = 'SELECT * FROM products ORDER BY id ASC';
    console.log("Querying /products");
    client.query(q, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
});

app.get('/sample_products', (req, res) => {
    const data = [
        {
            'name': "Klince 10cm",
            'cost': 5,
            'count': 5000
        },
        {
            'name': "Kladivo 3kg",
            'cost': 5000,
            'count': 15
        }
    ]
})

app.post('/order', (req, res) => {
    console.log("Received order request");
    console.log(req.body);
    res.status(200).json(req.body);

});

app.get('/test_query', (request, response) => {
    let q = 'SELECT * FROM data ORDER BY id ASC';
    client.query(q, (error, results) => {
        if (error) { throw error }
        response.status(200).json(results.rows)
    });
});
app.listen(port, () => {
    console.log(`running on port ${port}.`);
});