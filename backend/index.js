const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;
const { Client } = require('pg');

let client = new Client({
    host: 'database',
    port: 5432,
    user: 'postgres',
    password: 'Heslo123456',
    connectionTimeoutMillis: 3000
});
let connected = false;
// Retry db connection every 10 sec after it fails
// client.connect();
client.connect(err => {
    if (err) {
        console.log("Db connection error.");
        console.log(err);
        console.log("DB not found on database:5432, trying localhost:5432");
        client = new Client({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'Heslo123456',
            connectionTimeoutMillis: 3000
        });
        client.connect(err => {
            if (err) {
                console.log("Db not found on localhost:5432 either.");
                client = new Client({
                    host: 'database',
                    port: 5432,
                    user: 'postgres',
                    password: 'Heslo123456',
                    connectionTimeoutMillis: 3000
                });
            }
            else {
                console.log("Connection success. localhost:5432");
                connected = true;
            }
        });
    }
    else {
        connected = true;
        console.log("Successfully connected to Db. database:5432");
    }
});




app.use(cors());
app.use(bodyParser.json());


app.get('/connection_status', async (req, res) => {
    let retry = 0;
    let x = setInterval(() => {
        retry++;
        if (connected) {
            res.status(200).json({message: "connected to db"});
            clearInterval(x);
        }
        if (retry == 10) res.status(500).json({message: "cannot connect to db"});
    }, 500);
});

app.get('/', (req, res) => {
    res.send("hello from server");
});

app.get('/products', (req, res) => {
    let q = 'SELECT * FROM products ORDER BY id ASC';
    console.log("Querying /products");
    client.query(q, (error, results) => {
        if (error) {
            console.log("/products query done with error.");
            throw error;
        }
        console.log("/products query done.");
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
    const customer = req.body.customerInfo;
    const order = req.body.orderItems;
    //Insert customer
    let q = `INSERT INTO customers (name, email, street, street_number, postal_code, city)
    VALUES ('${customer.meno}','${customer.email}','${customer.ulica}','${customer.cislo}','${customer.psc}','${customer.mesto}')`;
    console.log(q);
    client.query(q, (error, result) => {
        if (error) {
            console.log(error);
            res.status(400).json({message: "Email already in use or some fields left empty"});
            return;
        }
        // Get ID of customer with this email
        client.query(`SELECT id from customers WHERE email='${customer.email}'`, (err, idResult) => {
            if (err) { 
                console.log(err);
                res.status(400).json({message: "Email already in use or some fields left empty"}); 
                return;
            }

            if (idResult.rows.length == 0) {
                console.log("Email not found");
                res.status(400).json({message: "Email not found"});
                return;
            }

            // Populate values for INSERT
            let productsValues = [];
            for (product of order) {
                productsValues.push(`(${idResult.rows[0].id}, ${product.id}, ${product.count}, 0)`);
            }
            client.query(`INSERT INTO orders (customer_id, product_id, count, state) VALUES ${productsValues.join(', ')}`, (er, re) => {
                console.log("3rd query");
                if (er) { 
                    console.log(er);
                    res.status(400).json({message: "Email already in use or some fields left empty"});
                    return;
                }
                
                res.status(201).json({message: "order created"});
            });

        });
    });

});

app.post('/remove_user', (req, res) => {
    const email = req.body.email;
    console.log(`Removing user with email ${email}`);
    client.query(`DELETE FROM customers WHERE customers.email='${email}'`, (err, results) => {
        if (err) {
            console.log("Couldn't remove user with email: " + email);
            console.log(err);
            res.status(400).json({message: `cannot remove user with email ${email}`});
            return;
        }
        res.status(200).json({message: `removed user with email ${email}`});
    })
})

app.get('/adclick', (req, res) => {
    console.log("Ad click triggered.")
    client.query(`UPDATE advertisements SET clicks = clicks + 1`, (err, results) => {
        if (err) {
            console.log("Click update counter failed.");
            res.status(400).json({message: "click failed"});
            return;
        }
        console.log("ad counter updated.");
        res.status(200).json({message: "click done"});
    });
});

app.post('/adchange', (req, res) => {
    const newUrl = req.body.url;
    const newImage = req.body.image;
    client.query(`UPDATE advertisements SET url='${newUrl}', image='${newImage}'`, (err, results) => {
        if (err) {
            console.log("Couldn't update ad.");
            console.log(err);
            res.status(400).json({message: "cannot update ad"});
            return;
        }
        res.status(200).json({message: "updated ad"});
    })
});

app.get('/ad', (req, res) => {
    client.query(`SELECT url, image, clicks from advertisements ORDER BY id ASC LIMIT 1`, (err, results) => {
        if (err) {
            res.status(404).json({message: "cannot find ads"});
            return;
        }
        res.status(200).json(results.rows[0]);
    });
});

// app.get('/test_query', (request, response) => {
//     let q = 'SELECT * FROM customers ORDER BY id ASC';
//     client.query(q, (error, results) => {
//         if (error) {
//             console.log(error);
//         }
//         response.status(200).json(results.rows)
//     });
// });
module.exports = app.listen(port, () => {
    console.log(`running on port ${port}.`);
});