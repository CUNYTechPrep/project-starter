const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const mysql = require('mysql2');

//mySQL configs
const pool = mysql.createPool({
    host: "35.237.190.4",
    user: 'root',
    password: '@4#C^&1O0^jE0hDs',
    database: 'main',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

//Express configs
const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json());

//USDA API configs
const foodDbKey = "?api_key=0gsnVutfUqh3JglxfREjB3Qhsc9FbWidg3p2DxAI";
const foodDbEndpoint = "https://api.nal.usda.gov/fdc/v1/search";
const foodDbDetailedEndpoint = "https://api.nal.usda.gov/fdc/v1/";

performFoodDbSearch = async (req) => {

    let foodsList;
    let responseList = [];
    try {
        await fetch(foodDbEndpoint + foodDbKey, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    'generalSearchInput': req.q
                }
            )
        })
            .then((response) => response.json())
            .then((json) => {
                foodsList = json.foods;
            })
        foodsList.forEach((element) => {
            responseList.push({
                'id': element.fdcId,
                'name': element.description
            })
        })
    }
    catch (err) {
        console.log(err);
    }

    return responseList;
}

performFoodDbDetailedSearch = async (id) => {
    let returnObj = [];
    await fetch(foodDbDetailedEndpoint + id + foodDbKey)
        .then((response) => response.json())
        .then((json) => {
            returnObj = json.ingredients;
        })
        .catch((err) => {
            console.log(err);
        })
    return returnObj;
}

app.get('/', (req, res) => {
    res.send("success");

    // //Test SQL connection
    // pool.query("SELECT * FROM allergens", (err, rows, fields) => {
    //     console.log(rows[0].name);
    // })
})

app.post('/api/search', async (req, res) => {

    let json = await performFoodDbSearch(req.body);
    res.json(json);
})

app.post('/api/check', async (req, res) => {
    let check = true;
    let allergies = req.body.allergies;
    let ingredients = await performFoodDbDetailedSearch(req.body.id);
    let allergyKeywords = [];
    let queryString = "SELECT keywords.name FROM keywords INNER JOIN allergens ON keywords.allergen = allergens.id WHERE";
    let querySearch = [];
    let count = -1;

    //if we have time do this:
    //put every ingredient into set
    //get allergy keywords from database
    allergies.forEach((element) => {
        if (count === -1) {
            queryString += " allergens.name = ? ";
            count++;
        } else 
            queryString += "OR allergens.name = ? ";
        querySearch.push(element);
    })

    queryString += ";";

    console.log(queryString);
    pool.execute(queryString,
        querySearch,
        (err, results, fields) => {

            results.forEach((element) => {
                allergyKeywords.push(element.name)
            })

            console.log(allergyKeywords);

            //Check if any allergies match
            for (let i = 0; i < allergyKeywords.length; i++) {
                console.log(allergyKeywords[i].toUpperCase());
                if (ingredients.includes(allergyKeywords[i].toUpperCase())) {
                    check = false;
                    break;
                }
            }

            res.json({
                'check': check
            });
        })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
