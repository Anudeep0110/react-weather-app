const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');

const db = require('./connexion')
const db_users = require('./Databases/Users')

require('dotenv').config()


const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/auth/signup',async  (req,res) => {
    await db_users.insertMany({
        username : req.body.username,
        password : req.body.password,

    }).then((response) => {
        console.log(response);
        res.send({flag:true});
    })
    .catch((error) => {
        console.log(error);
        res.send({flag:false});
    })
})


app.post('/auth/login',async (req,res) => {
    const uname = req.body.username;
    const pwd = req.body.password;
    await db_users.find({username:uname,password:pwd})
    .then(response => {
        if(response.length>0 && response.length===1) res.send({flag:true})
        else res.send({flag:false})
    })
    .catch(() => {
        res.send({flag:false})
    })
})

app.post('/auth/forgotpass',async (req,res) => {
    const uname = req.body.username;
    const pwd = req.body.password;
    await db_users.updateOne({username:uname},{password:pwd})
    .then(response => {
         res.send({flag:true})
    })
    .catch(() => {
        res.send({flag:false})
    })
})

app.post('/getweather', (req,res) => {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;
request(url, (err,response,body) => {
    if(err){
        res.json("Error, please try again");
    }else{
        let weather = JSON.parse(body);
        if(weather.main===undefined){
            res.json("Error, please try again");
    }else{
        let weatherText = `It's ${weather.main.temp} degrees with ${weather.weather[0].main} in ${weather.name}!`;
        res.json(weatherText);
    }
}
})
})

app.listen(5000,() => {
    console.log('Server started on port 5000');
})