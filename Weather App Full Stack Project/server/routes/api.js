const express = require('express')
const router = express.Router()
const City = require('../model/city');
const { default: axios } = require('axios');



router.get('/Weathers/:cityname' , function(req , res){
    const city = req.params.cityname
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=e401a206a3e04ed6c2351ff44ed1be80'
    const weather = axios.get(url)
    .then(
        (response) => {
            let weather = response.data
            const calledWeather = {
                name: weather.name ,
                temperature: weather.main.temp ,
                condition: weather.weather[0].main ,
                conditionpic: weather.weather[0].icon
            }
            
            res.status(200).send(calledWeather)}
    )
    
    
})

router.get('/Weathers' , function(req , res){
    try{
        City.find({}).then( function (weathers) {
            res.status(200).send(weathers)
        })
    }catch(error){
        res.status(404).send({error: "not found"})
    }
})

router.post('/Weathers' , function(req , res){
    
    let savedCity = new City({ 
        "name": req.body.name , 
        "temperature": req.body.temperature, 
        "condition": req.body.condition  ,
        "conditionpic": req.body.conditionpic 
     })
    
         City.create(savedCity).then( function (weathers) {
                res.status(200).end()
        }).catch(() => {
            res.send("existed")
        })     
})

router.delete('/Weathers/:cityname', function (req, res) {
    let city2delete = req.params.cityname
    const DeletedCity = City.findOneAndDelete({ name: city2delete}).then()
    res.status(200).send("deleted "+DeletedCity)
    
})


module.exports = router