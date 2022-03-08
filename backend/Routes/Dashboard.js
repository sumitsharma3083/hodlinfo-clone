const express = require('express')
const Router = express.Router();
const fetch = require('node-fetch')
const CryptoInfo = require('../model/Crypto')


// GET http://localhost:8080/v1/api/dashboard

Router.get('/dashboard' , async (req,res,next)=>{
    try {
        const result = await fetch('https://api.wazirx.com/api/v2/tickers', {
            method  : "GET",
            headers : {
                "content-type" : "application/json"
            }
        })
     
        const data = await result.json();
        const objArray = [];
        Object.keys(data).forEach(key => objArray.push({
           name: key,
           fields: data[key]
        }));

         for(var i=0 ; i<=9 ; i++){
               const newData = new CryptoInfo({
                   name : objArray[i].fields.name,
                   last : objArray[i].fields.last ,
                   buy : objArray[i].fields.buy  ,
                   sell : objArray[i].fields.sell ,
                   volume :  objArray[i].fields.volume, 
                   base_unit :  objArray[i].fields.base_unit
               })
               newData.save();
         }
          
         res.status(200).json({message : "success"})

    } catch (error) {
         res.status(400).json({message : error.message})
    }
  
})


// GET http://localhost:8080/v1/api/access

Router.get('/access', async (req,res)=>{
    try {
        const result = await CryptoInfo.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
   


})




module.exports = Router